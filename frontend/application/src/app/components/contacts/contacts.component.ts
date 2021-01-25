import {Component, OnInit} from '@angular/core';

import {ContactsService} from '../../services/contacts.service';
import {Contact} from '../../models/contact';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  contacts!: Contact[];

  // tslint:disable-next-line:variable-name
  constructor(private _contactService: ContactsService){}

  ngOnInit(): any {
    this.getContacts();
  }

  getContacts(): any {
    this._contactService.getData().subscribe(contacts => this.contacts = contacts);
  }

}
