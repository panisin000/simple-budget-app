import { Component, OnInit } from '@angular/core';
import { Requirement } from '../requirement';
import { RequirementService } from '../requirement.service';


@Component({
  selector: 'app-requirement-list',
  templateUrl: './requirement-list.component.html',
  styleUrls: ['./requirement-list.component.css']
})
export class RequirementListComponent implements OnInit {
  requirements: Requirement[] = []
  constructor(private requirementService: RequirementService) {
    // this.requirements = requirementService.getRequirement();
    // requirementService.getRequirement().subscribe(rs => this.requirements = rs);
  }
  ngOnInit(): void {
    this.requirementService.getRequirement().subscribe(rs => this.requirements = rs);
  }
}
