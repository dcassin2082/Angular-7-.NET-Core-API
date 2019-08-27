import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contact } from './contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  baseUrl = "http://localhost:55758/api/contacts";
  contact: Contact;
  contacts: Contact[];
   
  getContacts(){
    this.http.get(this.baseUrl).toPromise().then(x => {
      this.contacts = x as Contact[];
    })
  }
  postContact(contact: Contact){
    return this.http.post(this.baseUrl, contact);
  }
  putContact(contact: Contact){
    return this.http.put(this.baseUrl + '/ ' + contact.contactID, contact);
  }
  deleteContact(id: number){
    return this.http.delete(this.baseUrl + '/' + id);
  }
  resetContact(){
    this.contact = {
      contactID: null,
      firstName: '',
      lastName: '',
      emailAddress: '',
      phone: ''
    }
  }
}
