import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';

import { Book } from '../classes/book';
import { BookService } from '../services/book.service';

@Component({
  selector: 'books-borrow',
  templateUrl: './books-borrow.component.html'
})

export class BooksBorrowComponent {
  constructor(
    private bookService: BookService,
    private location: Location
  ) {}

  @Input() model: Book;

  bookState(): string {
    var book:string = this.model.status;
    if(book === "in_shelf") {
      return "Borrow";
    } else if (book === "on_circ") {
      return "Return";
    } else {
      return "Discontinued";
    }
  }

  bookAction(): void {
    var book:string = this.model.status;
    if(book === "in_shelf") {
      this.borrowBook();
    } else if (book === "on_circ") {
      this.returnBook();
    } else {
      return null;
    }
    this.goBack();
  }

  borrowBook(): void {
    this.bookService.bor(this.model.id)
      .then(() => null);
  }

  returnBook(): void {
    this.bookService.ret(this.model.id)
      .then(() => null);
  }

  goBack(): void {
    this.location.back();
  }
}
