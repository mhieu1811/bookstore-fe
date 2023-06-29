import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import BookDetail from '../../shared/model/book-detail.model';
import { BookService } from '../../shared/service/book.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.scss'],
})
export class EditBookComponent implements OnInit {
  isEdit: boolean = false;
  image: string = '';
  book: BookDetail | undefined = undefined;
  bookId: string | null = ''
  constructor(
    private router: Router,
    private bookService: BookService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.bookId = this.route.snapshot.paramMap.get('id');
    if (this.bookId)
      this.bookService.getBookDetail(this.bookId).subscribe((book) => {
        this.book = book;
      });
  }

  onSubmit(book: any): void {
    book._id = this.bookId
    this.bookService.putEditBook(book).subscribe((res) => {
      this.router.navigate(['/manage-books']);
    });
  }
}
