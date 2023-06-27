import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BookService } from '../../shared/service/book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss'],
})
export class AddBookComponent {
  bookForm: FormGroup = new FormGroup({});
  isEdit: boolean = false;
  image: string = '';
  constructor(private router: Router, private bookService: BookService) {}

  onSubmit(book: any): void {
    this.bookService.postAddBook(book).subscribe((res) => {
      this.router.navigate(['/manage-books']);
    });
  }
}
