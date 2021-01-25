import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import {AppComponent} from './app.component';
import {BooksComponent} from './components/books/books.component';
import {DetailComponent} from './components/books/detail.component';
import {CreateComponent} from './components/books/create.component';
import {UpdateComponent} from './components/books/update.component';
import {AnotherListComponent} from './components/books/another-list/another-list.component';
import {IndexComponent} from './components/index/index.component';
import {HeaderComponent} from './components/header/header.component';
import {ContactsComponent} from './components/contacts/contacts.component';
import {SignupComponent} from './components/signup/signup.component';
import {LoginComponent} from './components/login/login.component';
import { FooterComponent } from './components/footer/footer.component';
import { AllContactsComponent } from './components/contacts/all-contacts/all-contacts.component';
import { NewContactComponent } from './components/contacts/new-contact/new-contact.component';
import {AddHeaderInterceptor} from './interceptors/add-header-interceptor';

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
    AllContactsComponent,
    NewContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AddHeaderInterceptor,
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
