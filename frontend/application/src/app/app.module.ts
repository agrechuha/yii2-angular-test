import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {BooksComponent} from './books/books.component';
import {DetailComponent} from './books/detail.component';
import {CreateComponent} from './books/create.component';
import {UpdateComponent} from './books/update.component';
import {AnotherListComponent} from './books/another-list/another-list.component';
import {IndexComponent} from './index/index.component';
import {HeaderComponent} from './header/header.component';
import {ContactsComponent} from './contacts/contacts.component';
import {SignupComponent} from './signup/signup.component';
import {LoginComponent} from './login/login.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    CreateComponent,
    UpdateComponent,
    DetailComponent,
    AnotherListComponent,
    IndexComponent,
    HeaderComponent,
    ContactsComponent,
    SignupComponent,
    LoginComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
