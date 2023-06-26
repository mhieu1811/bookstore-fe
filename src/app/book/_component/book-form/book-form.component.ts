import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import BookDetail from 'src/app/shared/model/book-detail.model';
import { Category } from 'src/app/shared/model/book.model';
import { BookService } from 'src/app/shared/service/book.service';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss'],
})
export class BookFormComponent implements OnInit {
  @Input() book: BookDetail = {
    id: 0,
    title: '',
    image: '',
    description: '',
    price: 0,
    category: Category.Drama,
    quantity: 0,
  };
  @Output() returnBook: EventEmitter<BookDetail> = new EventEmitter();
  bookForm: FormGroup = new FormGroup({});
  isEdit: boolean = false;
  buttonText: string = 'Create New';
  image: string = '';
  constructor() {}

  ngOnInit(): void {
    if (this.book.id !== 0) {
      this.buttonText = 'Submit ';
    }
    this.image = this.book.image;
    this.bookForm = new FormGroup({
      title: new FormControl(this.book.title, [
        Validators.required,
        Validators.maxLength(30),
      ]),
      image: new FormControl(this.book.image, [Validators.required]),
      category: new FormControl(this.book.category, [Validators.required]),
      description: new FormControl(this.book.description, [
        Validators.required,
      ]),
      price: new FormControl(this.book.price, [Validators.required]),
      quantity: new FormControl(this.book.quantity, [Validators.required]),
    });
  }

  onSubmit(): void {
    if (this.bookForm.invalid) {
      return;
    }
    const bookDetail: BookDetail = {
      title: this.bookForm.get('title')?.value,
      price: this.bookForm.get('price')?.value,
      description: this.bookForm.get('description')?.value,
      quantity: this.bookForm.get('quantity')?.value,
      image: this.bookForm.get('image')?.value,
      category: this.bookForm.get('category')?.value,
      id: -1,
    };
    this.returnBook.emit(bookDetail);
  }

  getPicturePath() {
    if (this.image)
      return '../../assets/images/' + this.image.split(/(\\|\/)/g).pop();
    else return '';
  }
}
