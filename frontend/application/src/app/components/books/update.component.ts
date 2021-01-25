import {catchError, switchMap, timeout} from 'rxjs/operators';
import {Component, OnInit} from '@angular/core';

import {BookService} from '../../services/book.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Location} from '@angular/common';

import {Book} from '../../models/book';

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
    private router: Router,
    private location: Location,
  ) {
  }

  ngOnInit(): any {
    this.getBooks();
  }

  getBooks(): any {
    this.route.params.pipe(switchMap((params: Params) => this._bookService.getDetailBeforeEdit(+params.id)))
      .subscribe((book: Book) => this.book = book, (error) => {
        if (error.includes('403')) {
          this.router.navigate(['/books']);
        }
      });
  }

  save(): void {
    this._bookService.update(this.book);
    this.location.back();
  }

  goBack(): void {
    this.location.back();
  }
}
