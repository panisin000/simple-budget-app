import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RequirementService } from '../requirement.service';
import { Requirement } from '../requirement';
import { thMobile } from '../th-mobile.validator';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-requirement-form',
  templateUrl: './requirement-form.component.html',
  styleUrls: ['./requirement-form.component.css']
})


export class RequirementFormComponent implements OnInit {
  title = new FormControl("", Validators.required)
  contactMobileNo = new FormControl("", [Validators.required, thMobile])

  fg = new FormGroup({

    title: this.title,
    contactMobileNo: this.contactMobileNo,
  })

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private requirementService: RequirementService) { }
  ngOnInit(): void {
    const editId = Number(this.route.snapshot.paramMap.get('id'))
    console.log('paramMap id', editId)
    //if found id => edit mode
    if (editId) {
      this.requirementService.getRequirementById(editId).subscribe((v) => this.fg.patchValue(v));  //check key ที่ตรงกันให้อัตโนมัติ
    }
  }
  onSubmit(): void {
    // prepare data for API
    const newRequirement = this.fg.value as Requirement;
    this.requirementService.addRequirement(newRequirement).subscribe((v) => this.router.navigate(["/requirement-list"]));
  }
  onBack(): void {
    this.router.navigate(["/requirement-list"]);
  }

}
