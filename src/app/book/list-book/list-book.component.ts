import { Component, OnInit } from '@angular/core';
import Book from '../../shared/model/book.model';
import { BookService } from '../../shared/service/book.service';

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
