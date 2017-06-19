import { Injectable } from '@angular/core';

import { Book } from '../classes/book';
import { BOOKS } from '../classes/mock-books';

@Injectable()
export class BookService {
  getBooks(): Promise<Book[]> {
    return Promise.resolve(BOOKS);
  }
}
