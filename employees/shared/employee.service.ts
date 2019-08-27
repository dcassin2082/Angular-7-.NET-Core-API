import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  employee: Employee;
  employees: Employee[];
  baseUrl = "http://localhost:55758/api/employees";

  getEmployees() {
    this.http.get(this.baseUrl).toPromise().then(x => {
      this.employees = x as Employee[];
    })
  }
  postEmployee(employee: Employee) {
    return this.http.post(this.baseUrl, employee);
  }
  putEmployee(employee: Employee) {
    return this.http.put(this.baseUrl + '/' + employee.employeeID, employee);
  }
  deleteEmployee(id: number) {
    return this.http.delete(this.baseUrl + '/' + id);
  }
  resetEmployee() {
    this.employee = {
      employeeID: null,
      empCode: '',
      position: '',
      mobile: '',
      fullName: ''
    }
  }
}
