import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

import { environment } from '../../../environments/environment';
import type Book from '../model/book.model';
import type BookDetail from '../model/book-detail.model';
import successMessage from '../model/success-message.model';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor(private httpClient: HttpClient) { }

  getBook(): Observable<Book[]> {
    return this.httpClient.get<Book[]>(environment.book.getBooks)

  }

  getBookDetail(): Observable<BookDetail> {
    return this.httpClient.get<BookDetail>(environment.book.getBookDetail)
  }

  postAddBook(book: BookDetail): Observable<successMessage> {
    console.log()
    return this.httpClient.post<successMessage>(environment.book.addBook, book)
  }

  putEditBook(book: BookDetail): Observable<successMessage> {
    return this.httpClient.put<successMessage>(environment.book.editBook, book)
  }
}
