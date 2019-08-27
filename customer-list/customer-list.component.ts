import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../shared/customer.service';
import { ToastrService } from 'ngx-toastr';
import { Customer } from '../shared/customer.model';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styles: []
})
export class CustomerListComponent implements OnInit {

  constructor(public customerService: CustomerService, private toastrService: ToastrService) { }

  p: number = 1;
  key: string = 'firstName';
  reverse: boolean = false;
  filter: string;

  sort(key: string){
    this.key = key;
    this.reverse = !this.reverse;
  }
  clearSearch(){
    this.filter = null;
  }
   
  ngOnInit() {
    this.customerService.getCustomers();
  }
  populateForm(customer: Customer){
    this.customerService.customer = Object.assign({}, customer);
  }
  onDelete(id: number){
    if(confirm("Are you sure?")){
      this.customerService.deleteCustomer(id).subscribe(x => {
        this.toastrService.warning('Delete Success', 'Customer');
        this.customerService.getCustomers();
        this.customerService.resetCustomer();
      })
    }
  }

}
