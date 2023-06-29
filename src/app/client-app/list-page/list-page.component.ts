import { Component, OnInit } from '@angular/core';
import Book from '../../shared/model/book.model';
import { BookService } from '../../shared/service/book.service';
import PaginateBook from '../../shared/model/paginateBook.model';
import Filter from '../../shared/model/filter.model';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss'],
})
export class ListPageComponent implements OnInit {
  optionList: string[] = ['all', 'Drama', 'Comedy', 'Sport'];
  books: Book[] = [];

  constructor(private bookService: BookService) { }
  filter: Filter = { page: 1, searchKey: '', selectOptions: 'all' };
  ngOnInit(): void {
    this.getBooks();
  }

  async getBooks() {
    this.bookService.getBook(this.filter).subscribe((res: PaginateBook) => {
      this.books = res.items;
    });
  }
  onFilter(filter: any) {
    this.filter.searchKey = filter.searchKey
    this.filter.selectOptions = filter.selectOptions
    this.bookService.getBook(this.filter).subscribe((res: PaginateBook) => {
      this.books = res.items;
    });
  }
}
