import { Component } from '@angular/core';
import { Requirement } from '../requirement';
import { RequirementService } from '../requirement.service';

@Component({
  selector: 'app-requirement-approval',
  templateUrl: './requirement-approval.component.html',
  styleUrls: ['./requirement-approval.component.css']
})
export class RequirementApprovalComponent {
  requirements: Requirement[] = []
  constructor(

    private requirementService: RequirementService) {
    // this.requirements = requirementService.getRequirement();
    // requirementService.getRequirement().subscribe(rs => this.requirements = rs);
  }
  ngOnInit(): void {
    this.requirementService.getRequirements().subscribe(rs => this.requirements = rs);
  }
  onApprove(id: number): void {
    this.requirementService.approveRequirement(id).subscribe(() => (this.requirements = this.requirements.map((v) => v.id === id ? { ...v, status: "A" } : { ...v })));
    //ถ้า requirements ไหน = Approve ให้ เอา (...v ฟิวส์ เดิมทุกอัน)  เปลี่ยน status: "A" แต่ถ้าไม่ใช่ ให้ (...v ฟิวส์ เดิมทุกอัน)
  }
  onReject(id: number): void {
    // ถ้า requirement ตัวไหนคือตัวที่ approve v.id === id
           // ให้เอา field เดิมทุก field แลัวเขียน status ทับด้วย A
           // แต่ถ้าไม่ใช่ ให้เอา field เดิมทุก field เหมือนเดิม
    this.requirementService.rejectRequirement(id).subscribe(() => (this.requirements = this.requirements.map((v) => v.id === id ? { ...v, status: "R" } : { ...v })));
    //ถ้า requirements ไหน = Approve ให้ เอา (...v ฟิวส์ เดิมทุกอัน)  เปลี่ยน status: "A" แต่ถ้าไม่ใช่ ให้ (...v ฟิวส์ เดิมทุกอัน)
  }
}
