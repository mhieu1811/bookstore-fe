import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import BookDetail from 'src/app/shared/model/book-detail.model';
import { BookService } from 'src/app/shared/service/book.service';

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
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {}

  onSubmit(book: any): void {
    console.log(book);
  }
  getPicturePath() {
    if (this.image)
      return '../../assets/images/' + this.image.split(/(\\|\/)/g).pop();
    else return '';
  }
}
