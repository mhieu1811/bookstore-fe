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
  constructor(
    private router: Router,
    private bookService: BookService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.bookService.getBookDetail().subscribe((book) => {
      this.book = book;
    });
  }

  onSubmit(book: any): void {
    this.bookService.putEditBook(book).subscribe((res) => {
      this.router.navigate(['/manage-books']);
    });
  }
}
