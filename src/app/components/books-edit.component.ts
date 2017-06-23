import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';

import { Book } from '../classes/book';
import { BookService } from '../services/book.service';

@Component({
  selector: 'books-edit',
  templateUrl: './books-form.component.html'
})

export class BooksEditComponent {
  constructor(
    private bookService: BookService,
    private location: Location
  ) {}

  @Input() model: Book;

  get diagnostic() { return JSON.stringify(this.model); }

  submit(): void {
    this.bookService.update(this.model)
      .then(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}
