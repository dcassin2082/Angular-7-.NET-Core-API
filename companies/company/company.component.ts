import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../shared/company.service';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styles: []
})
export class CompanyComponent implements OnInit {

  constructor(public companyService: CompanyService, private toastrService: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }
  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
    this.companyService.resetCompany();
  }
  onSubmit(form: NgForm){
    if(form.value.companyId == null){
      form.value.companyId = 0;
      this.companyService.postCompany(form.value).subscribe(x => {
        this.toastrService.success('Added Successfully', 'Company');
        this.companyService.getCompanies();
        this.resetForm(form);
      })
    }
    else{
      this.companyService.putCompany(form.value).subscribe(x => {
        this.toastrService.info('Update success', 'Company');
        this.companyService.getCompanies();
        this.resetForm(form);
      })
    }
  }
}
