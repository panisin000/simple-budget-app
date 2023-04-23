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
  editId = 0;
  onSubmitBool=false;
  fg = new FormGroup({

    title: this.title,
    contactMobileNo: this.contactMobileNo,
  })

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private requirementService: RequirementService) { }
  ngOnInit(): void {
    this.editId = Number(this.route.snapshot.paramMap.get('id'))
    console.log('paramMap id', this.editId)
    //if found id => edit mode
    if (this.editId) {
      this.requirementService.getRequirementById(this.editId).subscribe((v) => this.fg.patchValue(v));  //check key ที่ตรงกันให้อัตโนมัติ
    }
  }
  onSubmit(): void {
    // const newRequirement = this.fg.value as Requirement;
    this.onSubmitBool=true;
    if (this.editId) {
      const editRequirement = this.fg.value as Requirement;
      this.requirementService
        .editRequirement(this.editId, editRequirement)
        .subscribe(() => this.router.navigate(['/requirement-list']));
    } else {
      // prepare data for API
      const newRequirement = this.fg.value as Requirement;
      this.requirementService
        .addRequirement(newRequirement)
        .subscribe(() => this.router.navigate(['/requirement-list']));
    }
  }
  onBack(): void {
    this.router.navigate(["/requirement-list"]);
  }

  confirmLeaveForm(): boolean {
    if (this.fg.touched && this.onSubmitBool===false) {
      return confirm("Leave form ?");
    }
    return true
  }
}
