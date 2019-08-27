import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { EmployeeService } from '../shared/employee.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styles: []
})
export class EmployeeComponent implements OnInit {

  constructor(private toastrService: ToastrService, public employeeService: EmployeeService) { }

  ngOnInit() {
    this.resetForm();
  }
  resetForm(form?: NgForm) {
    if (form != null) {
      form.reset();
    }
    this.employeeService.resetEmployee();
  }
  onSubmit(form: NgForm){
    if(form.value.employeeID == null){
      form.value.employeeID = 0;
      this.employeeService.postEmployee(form.value).subscribe(x => {
        this.toastrService.success('Insert Success', 'Employee');
        this.employeeService.getEmployees();
        this.resetForm(form);
      })
    }
    else{
      this.employeeService.putEmployee(form.value).subscribe(x => {
        this.toastrService.info('Update Success', 'Employee');
        this.employeeService.getEmployees();
        this.resetForm(form);
      })
    }
  }
}
