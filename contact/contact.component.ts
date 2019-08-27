import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactService } from '../shared/contact.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styles: []
})
export class ContactComponent implements OnInit {

  constructor(public contactService: ContactService, private toastrService: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }
  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
    this.contactService.resetContact();
  }
  onSubmit(form: NgForm){
    if(form.value.contactID == null){
      form.value.contactID = 0;
      this.contactService.postContact(form.value).subscribe(x => {
        this.toastrService.success('Insert Success', 'Contact');
        this.contactService.getContacts();
        this.resetForm(form);
      })
    }
    else{
      this.contactService.putContact(form.value).subscribe(x => {
        this.toastrService.info('Update Success', 'Contact');
        this.contactService.getContacts();
        this.resetForm(form);
      })
    }
  }
}
