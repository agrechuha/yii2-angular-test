import { Component, OnInit } from '@angular/core';
import {Contact} from '../../../models/contact';
import {ContactsService} from '../../../services/contacts.service';

@Component({
  selector: 'app-all-contacts',
  templateUrl: './all-contacts.component.html',
  styleUrls: ['./all-contacts.component.scss']
})
export class AllContactsComponent implements OnInit {

  contacts!: Contact[];

  // tslint:disable-next-line:variable-name
  constructor(private _contactService: ContactsService) {}

  ngOnInit(): any {
    this.getContacts();
  }

  getContacts(): any {
    this._contactService.getAllData().subscribe(contacts => this.contacts = contacts);
  }

}
