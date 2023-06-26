import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../../shared/service/book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss'],
})
export class AddBookComponent implements OnInit {
  bookForm: FormGroup = new FormGroup({});
  isEdit: boolean = false;
  image: string = '';
  constructor(
    private router: Router,
    private bookService: BookService,
  ) { }

  ngOnInit(): void { }

  onSubmit(book: any): void {
    this.bookService.postAddBook(book).subscribe((res) => {
      console.log(res)
      this.router.navigate(['/manage-books'])
    })
  }
  getPicturePath() {
    if (this.image)
      return '../../assets/images/' + this.image.split(/(\\|\/)/g).pop();
    else return '';
  }
}
