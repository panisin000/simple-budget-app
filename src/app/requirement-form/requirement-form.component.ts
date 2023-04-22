import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RequirementService } from '../requirement.service';
import { Requirement } from '../requirement';
import { thMobile } from '../th-mobile.validator';
import { Router } from '@angular/router';



@Component({
  selector: 'app-requirement-form',
  templateUrl: './requirement-form.component.html',
  styleUrls: ['./requirement-form.component.css']
})


export class RequirementFormComponent {
  title = new FormControl("", Validators.required)
  contactMobileNo = new FormControl("", [Validators.required, thMobile])

  fg = new FormGroup({
    title: this.title,
    contactMobileNo: this.contactMobileNo,
  })

  constructor(
    private router: Router,
    private requirementService: RequirementService) { }
  onSubmit(): void {
    // prepare data for API
    const newRequirement = this.fg.value as Requirement;
    this.requirementService.addRequirement(newRequirement).subscribe((v) => this.router.navigate(["/requirement-list"]));
  }
  onBack(): void {
    this.router.navigate(["/requirement-list"]);
  }

}
