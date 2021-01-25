import {Component, OnInit} from '@angular/core';

import {BookService} from '../../../services/book.service';
import {Location} from '@angular/common';
import {Book} from '../../../models/book';

@Component({
  selector: 'app-another-list',
  templateUrl: './another-list.component.html',
  styleUrls: ['./another-list.component.scss']
})
export class AnotherListComponent implements OnInit {

  books!: Book [];

  constructor(
    // tslint:disable-next-line:variable-name
    private _bookService: BookService,
    private location: Location
  ) {
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.getBooks();
  }

  // tslint:disable-next-line:typedef
  getBooks() {
    this._bookService.getAnotherData().subscribe(books => this.books = books);
  }

}
