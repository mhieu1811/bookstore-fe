import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

import { environment } from '../../../environments/environment';
import type Book from '../model/book.model';
import type BookDetail from '../model/book-detail.model';
import successMessage from '../model/success-message.model';
import PaginateBook from '../model/paginateBook.model';
import Filter from '../model/filter.model';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor(private httpClient: HttpClient) { }

  getBook(filter: Filter): Observable<PaginateBook> {
    let apiUrl = environment.book + "?"
    if (filter.page > 0)
      apiUrl += `page=${filter.page}&`
    if (filter.searchKey)
      apiUrl += `search=${filter.searchKey}&`
    if (filter.selectOptions != 'all')
      apiUrl += `category=${filter.selectOptions}&`
    return this.httpClient.get<PaginateBook>(apiUrl)

  }

  getBookDetail(bookId: string): Observable<BookDetail> {
    return this.httpClient.get<BookDetail>(`${environment.book}${bookId}`)
  }

  postAddBook(book: BookDetail): Observable<successMessage> {
    console.log()
    return this.httpClient.post<successMessage>(environment.book, book)
  }

  putEditBook(book: BookDetail): Observable<successMessage> {
    return this.httpClient.put<successMessage>(`${environment.book}${book._id}`, book)
  }

  deleteBook(bookId: string): Observable<successMessage> {
    return this.httpClient.delete<successMessage>(`${environment.book}${bookId}`)
  }
}
