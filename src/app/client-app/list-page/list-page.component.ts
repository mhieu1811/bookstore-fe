import { Component, OnInit } from '@angular/core';
import Book from '../../shared/model/book.model';
import { BookService } from '../../shared/service/book.service';
import PaginateBook from '../../shared/model/paginateBook.model';
import Filter from '../../shared/model/filter.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss'],
})
export class ListPageComponent implements OnInit {
  optionList: string[] = ['all', 'Drama', 'Comedy', 'Sport'];
  filter: Filter = { page: 1, searchKey: '', selectOptions: 'all', limit: 12 };
  paginate: Paginate = { totalItem: 0, currentPage: 0 };
  books: Book[] = [];

  constructor(
    private bookService: BookService,
    private router: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.getBooks();
  }

  async getBooks() {
    this.bookService.getBook(this.filter).subscribe((res: PaginateBook) => {
      this.paginate = {
        totalItem: res.totalItems,
        currentPage: res.currentPage,
      };
      this.books = res.items;
    });
  }
  onFilter(filter: any) {
    this.filter.searchKey = filter.searchKey;
    this.filter.selectOptions = filter.selectOptions;
    this.filter.page = 1;

    this.bookService.getBook(this.filter).subscribe((res: PaginateBook) => {
      this.paginate = {
        totalItem: res.totalItems,
        currentPage: res.currentPage,
      };
      this.filter.page = res.currentPage;
      this.books = res.items;
    });
  }

  loadPage(page: any) {
    this.filter.page = page.pageIndex + 1;
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
