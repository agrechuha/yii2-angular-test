import { Component } from '@angular/core';

import {BookService} from './book.service';
import {ContactsService} from './contacts/contacts.service';
import {SignupService} from './signup/signup.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'my-app',
  template: `
    <app-header></app-header>
    <h1 class="container mt-4 mb-4">{{title}}</h1>
    <base href="/">
    <router-outlet></router-outlet>
    <app-footer></app-footer>
  `,
  providers: [BookService, ContactsService, SignupService],
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'POC сайт Angular11 + Yii2';
}
