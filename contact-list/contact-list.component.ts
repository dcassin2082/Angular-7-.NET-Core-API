import { Component, OnInit } from '@angular/core';
import { Contact } from '../shared/contact.model';
import { ContactService } from '../shared/contact.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styles: []
})
export class ContactListComponent implements OnInit {

  constructor(public contactService: ContactService, private toastrService: ToastrService) { }

  filter: string;
  p: number = 1;
  key: string = 'firstName';
  reverse: boolean = false;

  clearSearch(){
    this.filter = null;
  }
  sort(key: string){
    this.key = key;
    this.reverse = !this.reverse;
  }
  ngOnInit() {
    this.contactService.getContacts();
  }
  populateForm(contact: Contact){
    this.contactService.contact = Object.assign({}, contact);
  }
  onDelete(id: number){
    if(confirm("Are your sure?")){
      this.contactService.deleteContact(id).subscribe(x => {
        this.toastrService.warning('Deleted Successfully', 'Delete');
        this.contactService.getContacts();
        this.contactService.resetContact();
      })
    }
  }
}
