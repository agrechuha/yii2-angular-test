import {switchMap} from 'rxjs/operators';
import {Component, OnInit} from '@angular/core';

import {BookService} from '../book.service';
import {ActivatedRoute, Params} from '@angular/router';
import {Location} from '@angular/common';
import {Router} from '@angular/router';

import {Book} from '../book';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'my-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  book!: Book;

  constructor(
    // tslint:disable-next-line:variable-name
    private _bookService: BookService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router
  ) {
  }

  ngOnInit(): any {
    this.getBook();
  }

  delete(book: Book): void {
    this._bookService
      .delete(book.id)
      .subscribe(() => {
        this.router.navigate(['/books']);
      });
  }

  getBook(): any {
    this.route.params.pipe(switchMap((params: Params) => this._bookService.getDetail(+params.id)))
      .subscribe((book: Book) => this.book = book);
  }

  goBack(): void {
    this.location.back();
  }
}
