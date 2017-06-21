import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Book } from '../classes/book';
import { BookService } from '../services/book.service';

import 'rxjs/add/operator/switchMap';
@Component({
  selector: 'books-show',
  templateUrl: './books-show.component.html'
})

export class BooksShowComponent implements OnInit {
  constructor(
    private bookService: BookService,
    private route: ActivatedRoute,
    private location: Location
  ) {}
  book: Book;

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.bookService.getBook(+params['id']))
      .subscribe(book => this.book = book);
  }

  goBack(): void {
    this.location.back();
  }
}
