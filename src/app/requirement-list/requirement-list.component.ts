import { Component, OnInit } from '@angular/core';
import { Requirement } from '../requirement';
import { RequirementService } from '../requirement.service';
import { FormControl } from '@angular/forms';
import { mobileFormat } from '../mobile-format';
import { Router } from '@angular/router';


@Component({
  selector: 'app-requirement-list',
  templateUrl: './requirement-list.component.html',
  styleUrls: ['./requirement-list.component.css']
})
export class RequirementListComponent implements OnInit {
  requirements: Requirement[] = []

  isSmallTable = new FormControl(false);
  constructor(
    private router: Router,
    private requirementService: RequirementService) {
    // this.requirements = requirementService.getRequirement();
    // requirementService.getRequirement().subscribe(rs => this.requirements = rs);
  }
  ngOnInit(): void {
    this.requirementService.getRequirements().subscribe(rs => this.requirements = rs);
  }

  onAdd(): void {
    this.router.navigate(["/requirement-form"]);
  }
  onDelete(id: number): void {
    this.requirementService.delelteRequirement(id).subscribe(rs => this.requirements = this.requirements.filter(v => v.id != id)); //reload data อย่าลืม subscribe ด้วยทุกครั้ง
  }
  onEdit(id: number): void {
    // http://localhost:4200/requirement-form/1010
    this.router.navigate(["/requirement-form", id]);

  }
}


