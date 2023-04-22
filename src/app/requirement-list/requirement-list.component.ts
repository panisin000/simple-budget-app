import { Component, OnInit } from '@angular/core';
import { Requirement } from '../requirement';
import { RequirementService } from '../requirement.service';
import { FormControl } from '@angular/forms';
import { mobileFormat } from '../mobile-format';


@Component({
  selector: 'app-requirement-list',
  templateUrl: './requirement-list.component.html',
  styleUrls: ['./requirement-list.component.css']
})
export class RequirementListComponent implements OnInit {
  requirements: Requirement[] = []

  isSmallTable = new FormControl(false);
  constructor(private requirementService: RequirementService) {
    // this.requirements = requirementService.getRequirement();
    // requirementService.getRequirement().subscribe(rs => this.requirements = rs);
  }
  ngOnInit(): void {
    this.requirementService.getRequirement().subscribe(rs => this.requirements = rs);
  }

  contactmobileNoFormat(mobileNo: string): string {
    return mobileFormat(mobileNo);
  }
}
