import { Component, OnInit } from '@angular/core';
import { BookService } from '../../shared/service/book.service';
import Book from '../../shared/model/book.model';
import PaginateBook from 'src/app/shared/model/paginateBook.model';
import Filter from 'src/app/shared/model/filter.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  books: Book[] = [];
  filter: Filter = { page: 1, searchKey: '', selectOptions: 'all', limit: 12 };

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.getBooks();
  }

  private async getBooks() {
    this.bookService.getBook(this.filter).subscribe((res: PaginateBook) => {
      this.books = res.items;
    });
  }
}
