import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {BooksComponent} from './components/books/books.component';
import {DetailComponent} from './components/books/detail.component';
import {CreateComponent} from './components/books/create.component';
import {UpdateComponent} from './components/books/update.component';
import {AnotherListComponent} from './components/books/another-list/another-list.component';
import {IndexComponent} from './components/index/index.component';
import {ContactsComponent} from './components/contacts/contacts.component';
import {SignupComponent} from './components/signup/signup.component';
import {LoginComponent} from './components/login/login.component';
import {AllContactsComponent} from './components/contacts/all-contacts/all-contacts.component';
import {NewContactComponent} from './components/contacts/new-contact/new-contact.component';

const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'books', component: BooksComponent},
  {path: 'books/another-list', component: AnotherListComponent},
  {path: 'books/create', component: CreateComponent},
  {path: 'detail/:id', component: DetailComponent},
  {path: 'update/:id', component: UpdateComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: 'contacts/all', component: AllContactsComponent},
  {path: 'contacts/new-contact', component: NewContactComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
