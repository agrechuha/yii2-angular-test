import {Component, OnInit} from '@angular/core';

import {BookService} from '../../book.service';
import {Location} from '@angular/common';
import {Book} from "../../book";

@Component({
  selector: 'app-another-list',
  templateUrl: './another-list.component.html',
  styleUrls: ['./another-list.component.scss']
})
export class AnotherListComponent implements OnInit {

  books!: Book [];

  constructor(
    private _bookService: BookService,
    private location: Location
  ) {
  }

  ngOnInit() {
    this.getBooks();
  }

  getBooks() {
    this._bookService.getAnotherData().then(books => this.books = books);
  }

}
