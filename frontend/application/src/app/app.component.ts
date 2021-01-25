import { Component } from '@angular/core';

import {BookService} from './services/book.service';
import {ContactsService} from './services/contacts.service';
import {TestService} from './services/test.service';
import {AuthService} from './services/auth.service';

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
  providers: [BookService, ContactsService, AuthService, TestService],
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'POC сайт Angular11 + Yii2';
}
