import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../shared/customer.service';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styles: []
})
export class CustomerComponent implements OnInit {

  constructor(public customerService: CustomerService, private toastrService: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }
  resetForm(form? : NgForm){
    if(form != null){
      form.reset();                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
    }
    this.customerService.resetCustomer();
  }
  onSubmit(form: NgForm){
    if(form.value.customerID == null){
      form.value.customerID = 0;
      this.customerService.postCustomer(form.value).subscribe(x => {
        this.toastrService.success('Added Successfully', 'Customer');
        this.customerService.getCustomers();
        this.resetForm(form);
      })
    }
    else{
      this.customerService.putCustomer(form.value).subscribe(x => {
        this.toastrService.info('Update Success', 'Customer');
        this.customerService.getCustomers();
        this.resetForm(form);
      })
    }
  }
}
