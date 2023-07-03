import { Component, OnInit } from '@angular/core';
import Book from '../../shared/model/book.model';
import { BookService } from '../../shared/service/book.service';
import PaginateBook from '../../shared/model/paginateBook.model';
import Filter from 'src/app/shared/model/filter.model';

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.scss'],
})
export class ListBookComponent implements OnInit {
  displayedColumns: string[] = [
    'title',
    'image',
    'category',
    'price',
    'action',
  ];

  books: Book[] = [];
  filter: Filter = { page: 1, searchKey: '', selectOptions: 'all', limit: 10 };
  paginate: Paginate = { totalItem: 0, currentPage: 0 };

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.getBooks();
  }

  private async getBooks() {
    this.bookService.getBook(this.filter).subscribe((res: PaginateBook) => {
      this.books = res.items;
      this.paginate = {
        totalItem: res.totalItems,
        currentPage: res.currentPage,
      };
    });
  }

  async deleteBook(bookId: string) {
    this.bookService.deleteBook(bookId).subscribe((res) => {
      this.books = this.books.filter((book) => book._id !== bookId);
    });
  }

  loadPage(page: any) {
    this.filter.page = page.pageIndex + 1;
    this.filter.limit = page.pageSize;
    this.bookService.getBook(this.filter).subscribe((res: PaginateBook) => {
      this.paginate = {
        totalItem: res.totalItems,
        currentPage: res.currentPage,
      };
      this.books = res.items;
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    });
  }
}

interface Paginate {
  currentPage: number;
  totalItem: number;
}
