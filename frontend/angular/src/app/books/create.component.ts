import { Component, OnInit } from '@angular/core';

import {BookService} from '../book.service';
import { Location }               from '@angular/common';

import {Book} from '../book';

@Component({
  selector: 'my-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})

// @ts-ignore
export class CreateComponent implements OnInit {
  book!: Book;

  constructor(
    private _bookService: BookService,
    private location: Location,
  ) { }

  ngOnInit(): void {
  }

  add(title: string, src: string, created_at: string, description: string, author: string): void {
    title = title.trim();
    src = src.trim();
    created_at = created_at.trim();
    description = description.trim();
    author = author.trim();
    if (!title) { return; }
    this._bookService.create(title, src, created_at, description, author)
      .then(() => {
        this.location.back();
      });
  }
}
