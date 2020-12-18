import { Component, OnInit } from '@angular/core';

import {ContactsService} from './contacts.service';
import {Contact} from './contact';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  contacts!: Contact[];

  constructor(private _contactService: ContactsService,) {}

  ngOnInit () {
    this.getContacts();
  }

  getContacts() {
    this._contactService.getData().then(contacts => this.contacts = contacts);
  }

}
