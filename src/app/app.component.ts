import { Component, OnInit } from '@angular/core';

import { Book } from './classes/book';
import { BookService } from './services/book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  constructor(
    private bookService: BookService
  ) {}
  books: Book[];
  sel_book: Book;
  title = 'CWTS Library';

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks(): void {
    this.bookService.getBooks().then(books => this.books = books);
  }

  onSelect(book: Book): void {
    this.sel_book = book;
  }
}
