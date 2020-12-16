import { Component, OnInit } from '@angular/core';

import {BookService} from '../book.service';
import {Book} from '../book';

@Component({
  selector: 'my-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  books!: Book [];

  constructor(
    private _bookService: BookService,
  ) { }

  ngOnInit () {
    this.getBooks();
  }

  getBooks() {
    this._bookService.getData().then(books => this.books = books);
  }

}
