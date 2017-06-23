import { Component } from '@angular/core';
import { Location } from '@angular/common';

import { Book } from '../classes/book';
import { BookService } from '../services/book.service';

@Component({
  selector: 'books-form',
  templateUrl: './books-form.component.html'
})

export class BooksFormComponent {
  constructor(
    private bookService: BookService,
    private location: Location
  ) {}

  model = new Book();

  get diagnostic() { return JSON.stringify(this.model); }

  goBack(): void {
    this.location.back();
  }

  submit(): void {
    //send this model over to the Rails API
    this.bookService.create(this.model)
      .then(() => this.goBack());
  }
}
