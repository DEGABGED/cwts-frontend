import { Component, OnInit } from '@angular/core';

import { Book } from '../classes/book';
import { BookService } from '../services/book.service';

@Component({
  selector: 'books-index',
  templateUrl: './books-index.component.html',
})

export class BooksIndexComponent implements OnInit {
  constructor(
    private bookService: BookService
  ) {}
  books: Book[];
  sel_book: Book;

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
