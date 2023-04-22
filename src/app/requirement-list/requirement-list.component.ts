import { Component } from '@angular/core';
import { Requirement } from '../requirement';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-requirement-list',
  templateUrl: './requirement-list.component.html',
  styleUrls: ['./requirement-list.component.css']
})
export class RequirementListComponent {
  requirements: Requirement[] = [
    // { id: 2000, title: 'USB wire', contactMobileNo: '0123456789' },
    // { id: 2001, title: 'USB A', contactMobileNo: '0987654321' },
    // { id: 2002, title: 'USB C', contactMobileNo: '0555555555' }
  ]
  primaryClick() {
    console.log("primaryClick")
  }
}
