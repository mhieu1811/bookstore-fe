import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

import { environment } from '../../../environments/environment';
import type Book from '../model/book.model';
import type BookDetail from '../model/book-detail.model';
import successMessage from '../model/success-message.model';
import PaginateBook from '../model/paginateBook.model';
import Filter from '../model/filter.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor(
    private httpClient: HttpClient,
    private authService: AuthService
  ) {}

  getBook(filter: Filter): Observable<PaginateBook> {
    let apiUrl = environment.book + '?';
    if (filter.page > 0) apiUrl += `page=${filter.page}&`;
    if (filter.limit > 0) apiUrl += `limit=${filter.limit}&`;
    if (filter.searchKey) apiUrl += `search=${filter.searchKey}&`;
    if (filter.selectOptions != 'all')
      apiUrl += `category=${filter.selectOptions}`;
    return this.httpClient.get<PaginateBook>(apiUrl);
  }

  getBookDetail(bookId: string): Observable<BookDetail> {
    return this.httpClient.get<BookDetail>(`${environment.book}${bookId}`);
  }

  postAddBook(book: BookDetail): Observable<successMessage> {
    const headers = {
      Authorization: `Bearer ${this.authService.getAccessToken()}`,
      'My-Custom-Header': 'foobar',
    };
    return this.httpClient.post<successMessage>(environment.book, book, {
      headers,
    });
  }

  putEditBook(book: BookDetail): Observable<successMessage> {
    const headers = {
      Authorization: `Bearer ${this.authService.getAccessToken()}`,
      'My-Custom-Header': 'foobar',
    };
    return this.httpClient.put<successMessage>(
      `${environment.book}${book._id}`,
      book,
      { headers }
    );
  }

  deleteBook(bookId: string): Observable<successMessage> {
    const headers = {
      Authorization: `Bearer ${this.authService.getAccessToken()}`,
      'My-Custom-Header': 'foobar',
    };
    return this.httpClient.delete<successMessage>(
      `${environment.book}${bookId}`,
      { headers }
    );
  }
}
