import { Component, OnInit } from '@angular/core';

import {BookService} from '../book.service';
import {Book} from '../book';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'my-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  books!: Book [];

  constructor(
    // tslint:disable-next-line:variable-name
    private _bookService: BookService,
  ) { }

  ngOnInit(): any {
    this.getBooks();
  }

  getBooks(): any {
    this._bookService.getData().subscribe(books => this.books = books);
  }

}
