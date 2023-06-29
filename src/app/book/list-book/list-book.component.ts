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
  filter: Filter = { page: 1, searchKey: '', selectOptions: 'all' };

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.getBooks();
  }

  private async getBooks() {
    this.bookService.getBook(this.filter).subscribe((res: PaginateBook) => {
      this.books = res.items;
    });
  }

  async deleteBook(bookId: string) {
    this.bookService.deleteBook(bookId).subscribe((res) => {
      this.books = this.books.filter((book) => book._id !== bookId)
    });
  }
}
