import { Component, OnInit } from '@angular/core';

import { Book } from '../classes/book';
import { BookService } from '../services/book.service';

@Component({
  selector: 'books-dashboard',
  templateUrl: './dashboard.component.html'
})

export class DashboardComponent implements OnInit {
  constructor(
    private bookService: BookService
  ) {}
  book: Book;

  ngOnInit(): void {
    this.bookService.getBooks().then(books => this.book = books[1]);
  }
}
