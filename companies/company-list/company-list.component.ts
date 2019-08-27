import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../shared/company.service';
import { ToastrService } from 'ngx-toastr';
import { Company } from '../shared/company.model';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styles: []
})
export class CompanyListComponent implements OnInit {

  constructor(public companyService: CompanyService, private toastrService: ToastrService) { }

  filter: string;
  p: number = 1;
  key: string = 'companyName';
  reverse: boolean = false;

  clearSearch(){
    this.filter = null;
  }
  sort(key: string){
    this.key = key;
    this.reverse = !this.reverse;
  }
  ngOnInit() {
    this.companyService.getCompanies();
  }
  populateForm(company: Company){
    this.companyService.company = Object.assign({}, company);
  }
  onDelete(id: number){
    if(confirm("Are your sure?")){
      this.companyService.deleteCompany(id).subscribe(x => {
        this.toastrService.warning('Deleted Successfully', 'Delete');
        this.companyService.getCompanies();
        this.companyService.resetCompany();
      })
    }
  }
}
