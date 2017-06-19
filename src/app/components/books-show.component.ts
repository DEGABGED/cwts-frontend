import { Component, Input } from '@angular/core';

import { Book } from '../classes/book';
@Component({
  selector: 'books-show',
  templateUrl: './books-show.component.html'
})

export class BooksShowComponent {
  @Input() book: Book;
}
