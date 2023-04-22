import { Injectable } from '@angular/core';
import { Requirement } from './requirement';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequirementService {
  httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }
  //get all
  getRequirements(): Observable<Requirement[]> {
    const url = "http://localhost:3000/requirements";
    return this.httpClient.get<Requirement[]>(url)
  };

  //get by id
  getRequirementById(id: number): Observable<Requirement> {
    const url = "http://localhost:3000/requirements";
    return this.httpClient.get<Requirement>(`${url}/${id}`);
  };
  //   return [
  //     { id: 2000, title: 'USB wire', contactMobileNo: '0123456789' },
  //     { id: 2001, title: 'USB A', contactMobileNo: '0987654321' },
  //     { id: 2002, title: 'USB C', contactMobileNo: '0555555555' },
  //     { id: 2003, title: 'USB B', contactMobileNo: '1234567890' }]
  // };
  // requirement.service
  addRequirement(newRequirement: Requirement): Observable<Requirement> {
    const url = 'http://localhost:3000/requirements';
    return this.httpClient.post<Requirement>(url, newRequirement);
  }
  delelteRequirement(id: number): Observable<void> {
    const url = 'http://localhost:3000/requirements';
    return this.httpClient.delete<void>(`${url}/${id}`);
  }

  editRequirement(id: number, editRequirement: Requirement): Observable<void> {
    const url = 'http://localhost:3000/requirements';
    return this.httpClient.put<void>(`${url}/${id}`, editRequirement);
  }
  approveRequirement(id: number) {
    const url = 'http://localhost:3000/requirements';
    return this.httpClient.patch(`${url}/${id}`, { status: "A" });
  }
  rejectRequirement(id: number) {
    const url = 'http://localhost:3000/requirements';
    return this.httpClient.patch(`${url}/${id}`, { status: "R" });
  }
}
