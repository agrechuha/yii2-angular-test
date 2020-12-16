import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';

import {BooksComponent} from '../books/books.component';
import {DetailComponent} from '../books/detail.component';
// @ts-ignore
import {CreateComponent} from '../books/create.component';
// @ts-ignore
import {UpdateComponent} from '../books/update.component';

const routes: Routes = [
  {path: 'books', component: BooksComponent},
  {path: 'books/create', component: CreateComponent},
  {path: 'detail/:id', component: DetailComponent},
  {path: 'update/:id', component: UpdateComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

// @ts-ignore
export class AppRoutingModule {
}
