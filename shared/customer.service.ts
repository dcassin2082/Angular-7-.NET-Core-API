import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from './customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  baseUrl = "http://localhost:55758/api/customers";
  customer: Customer;
  customers: Customer[];

  getCustomers() {
    this.http.get(this.baseUrl).toPromise().then(x => {
      this.customers = x as Customer[];
    })
  }
  postCustomer(customer: Customer) {
    return this.http.post(this.baseUrl, customer);
  }
  putCustomer(customer: Customer) {
    return this.http.put(this.baseUrl + '/' + customer.customerID, customer);
  }
  deleteCustomer(id: number) {
    return this.http.delete(this.baseUrl + '/' + id);
  }
  resetCustomer() {
    this.customer = {
      customerID: null,
      firstName: '',
      lastName: '',
      address: '',
      city: '',
      state: '',
      zip: '',
      email: ''
    }
  }
}
