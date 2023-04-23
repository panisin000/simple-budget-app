import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { thMobile } from '../th-mobile.validator';
import { ActivatedRoute, Router } from '@angular/router';
import { RequirementService } from '../requirement.service';

@Component({
  selector: 'app-requirement-view',
  templateUrl: './requirement-view.component.html',
  styleUrls: ['./requirement-view.component.css']
})
export class RequirementViewComponent implements OnInit {
  title = new FormControl("", Validators.required)
  contactMobileNo = new FormControl("", [Validators.required, thMobile])
  viewId = 0;
  fg = new FormGroup({

    title: this.title,
    contactMobileNo: this.contactMobileNo,
  })

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private requirementService: RequirementService) { }
  ngOnInit(): void {
    this.viewId = Number(this.route.snapshot.paramMap.get('id'))
    console.log('paramMap id', this.viewId)
    this.requirementService.getRequirementById(this.viewId).subscribe((v) => this.fg.patchValue(v));  //check key ที่ตรงกันให้อัตโนมัติ
  }
  onBack(): void {
    this.router.navigate(["/requirement-list"]);
  }
}
