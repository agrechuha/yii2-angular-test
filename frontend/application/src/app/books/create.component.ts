import {Component, OnInit} from '@angular/core';

import {BookService} from '../book.service';
import {Location} from '@angular/common';

import {Book} from '../book';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'my-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})

// @ts-ignore
export class CreateComponent implements OnInit {
  book!: Book;

  constructor(
    // tslint:disable-next-line:variable-name
    private _bookService: BookService,
    private location: Location,
  ) {
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:variable-name
  add(title: string, src: string, createdAt: string, description: string, author: string): void {
    title = title.trim();
    src = src.trim();
    createdAt = createdAt.trim();
    description = description.trim();
    author = author.trim();
    if (!title) {
      return;
    }
    this._bookService.create(title, src, createdAt, description, author).subscribe(() => {
      this.location.back();
    });
  }
}
