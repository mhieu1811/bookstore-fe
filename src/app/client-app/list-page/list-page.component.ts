import { Component, OnInit } from '@angular/core';
import Book from '../../shared/model/book.model';
import { BookService } from '../../shared/service/book.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss'],
})
export class ListPageComponent implements OnInit {
  optionList: string[] = ['all', 'drama', 'comedy', 'sport'];
  books: Book[] = [];

  constructor(private bookService: BookService) {}
  filter = {};
  ngOnInit(): void {
    this.getBooks();
  }

  async getBooks() {
    this.bookService.getBook().subscribe((books: Book[]) => {
      this.books = books;
    });
  }
  onFilter(filter: any) {
    this.filter = filter;
  }
}
