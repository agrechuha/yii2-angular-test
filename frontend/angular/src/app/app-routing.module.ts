import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {BooksComponent} from './books/books.component';
import {DetailComponent} from './books/detail.component';
import {CreateComponent} from './books/create.component';
import {UpdateComponent} from './books/update.component';
import {AnotherListComponent} from "./books/another-list/another-list.component";
import {IndexComponent} from "./index/index.component";
import {ContactsComponent} from "./contacts/contacts.component";
import {SignupComponent} from "./signup/signup.component";
import {LoginComponent} from "./login/login.component";

const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'books', component: BooksComponent},
  {path: 'books/another-list', component: AnotherListComponent},
  {path: 'books/create', component: CreateComponent},
  {path: 'detail/:id', component: DetailComponent},
  {path: 'update/:id', component: UpdateComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
