import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Company } from './company.model';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private http: HttpClient) { }

  baseUrl = "http://localhost:55758/api/companies";
  company: Company;
  companies: Company[];

  getCompanies() {
    this.http.get(this.baseUrl).toPromise().then(x => {
      this.companies = x as Company[];
    })
  }
  postCompany(company: Company) {
    return this.http.post(this.baseUrl, company);
  }
  putCompany(company: Company) {
    return this.http.put(this.baseUrl + '/' + company.companyId, company);
  }
  deleteCompany(id: number) {
    return this.http.delete(this.baseUrl + '/' + id);
  }
  resetCompany() {
    this.company = {
      companyId: null,
      companyName: '',
      region: '',
      organizationNumber: '',
      address1: '',
      address2: '',
      city: '',
      state: '',
      zip: ''
    }
  }
}
