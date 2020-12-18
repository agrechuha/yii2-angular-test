import { Component } from '@angular/core';

import {BookService} from './book.service';
import {ContactsService} from "./contacts/contacts.service";

@Component({
  selector: 'my-app',
  template: `
    <app-header></app-header>
    <h1>{{title}}</h1>
    <router-outlet></router-outlet>
  `,
  providers: [BookService, ContactsService],
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'POC сайт Angular11 + Yii2';
}
