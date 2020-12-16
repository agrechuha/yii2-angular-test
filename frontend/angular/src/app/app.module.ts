import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { DetailComponent }      from './books/detail.component';
import { CreateComponent }      from './books/create.component';
import { UpdateComponent }      from './books/update.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    CreateComponent,
    UpdateComponent,
    DetailComponent
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
export class AppModule { }
