import { Component, OnInit } from '@angular/core';
import { BookService } from '../../shared/service/book.service';
import Book from '../../shared/model/book.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  books: Book[] = [];

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.getBooks();
  }

  private async getBooks() {
    this.bookService.getBook().subscribe((books: Book[]) => {
      this.books = books;
    });
  }
}
