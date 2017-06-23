import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Book } from '../classes/book';
import { BOOKS } from '../classes/mock-books';

@Injectable()
export class BookService {
  constructor(
    private http: Http
  ) {}

  private api_base_url = 'http://localhost:3000/api/books';
  private headers = new Headers({'Content-Type': 'application/json'});

  getBooks(): Promise<Book[]> {
    //return Promise.resolve(BOOKS);
    return this.http.get(this.api_base_url)
      .toPromise()
      .then(response => response.json() as Book[])
      .catch(this.handleError);
  }

  getBook(id: number): Promise<Book> {
    const url = `${this.api_base_url}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Book[])
      .catch(this.handleError);
  }

  create(book: Book): Promise<Book> {
    return this.http
      .post(this.api_base_url, JSON.stringify(book), {headers: this.headers})
      .toPromise()
      .then(res => res.json() as Book)
      .catch(this.handleError);
  }

  update(book: Book): Promise<Book> {
    const url = `${this.api_base_url}/${book.id}`;
    return this.http
      .put(url, JSON.stringify(book), {headers: this.headers})
      .toPromise()
      .then(() => book)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.api_base_url}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  bor(book_id: number): Promise<void> {
    const url = `${this.api_base_url}/${book_id}/borrow`;
    return this.http
    .patch(url, JSON.stringify({id: book_id}), {headers: this.headers})
    .toPromise()
    .catch(this.handleError);
  }

  ret(book_id: number): Promise<void> {
    const url = `${this.api_base_url}/${book_id}/return`;
    return this.http
    .patch(url, JSON.stringify({id: book_id}), {headers: this.headers})
    .toPromise()
    .then(() => null)
    .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    console.log('ASDFAFFAfsdsd');
    return Promise.reject(error.message || error);
  }
}
