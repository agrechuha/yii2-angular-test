import {switchMap} from 'rxjs/operators';
import {Component, OnInit} from '@angular/core';

import {BookService} from '../book.service';
import {ActivatedRoute, Params} from '@angular/router';
import {Location} from '@angular/common';

import {Book} from '../book';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'my-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})

// @ts-ignore
export class UpdateComponent implements OnInit {
  book!: Book;

  constructor(
    // tslint:disable-next-line:variable-name
    private _bookService: BookService,
    private route: ActivatedRoute,
    private location: Location,
  ) {
  }

  ngOnInit(): any {
    this.getBooks();
  }

  getBooks(): any {
    this.route.params.pipe(switchMap((params: Params) => this._bookService.getDetail(+params['id'])))
      .subscribe((book: Book) => this.book = book);
  }

  save(): void {
    this._bookService.update(this.book);
  }

  goBack(): void {
    this.location.back();
  }
}
