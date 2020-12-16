import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {BooksComponent} from './books/books.component';
import {DetailComponent} from './books/detail.component';
import {CreateComponent} from './books/create.component';
import {UpdateComponent} from './books/update.component';

const routes: Routes = [
  {path: 'books', component: BooksComponent},
  {path: 'books/create', component: CreateComponent},
  {path: 'detail/:id', component: DetailComponent},
  {path: 'update/:id', component: UpdateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
