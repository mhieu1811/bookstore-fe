import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookFormComponent } from './book-form.component';
import { Category } from '../../../shared/model/book.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import BookDetail from '../../../shared/model/book-detail.model';

describe('BookFormComponent', () => {
  let component: BookFormComponent;
  let fixture: ComponentFixture<BookFormComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.returnBook = jasmine.createSpyObj(['emit']);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should generate edit form', () => {
    component.book = {
      id: 1,
      title: 'test',
      image: 'test',
      price: 0,
      description: 'test',
      category: Category.Drama,
      quantity: 0,
    };
    component.ngOnInit();
    expect(component.bookForm.controls['title'].value).toEqual('test');
    expect(component.buttonText).toEqual('Submit ');
  });

  it('should onSubmit', () => {
    component.bookForm = new FormGroup({
      title: new FormControl('test', [
        Validators.required,
        Validators.maxLength(30),
      ]),
      image: new FormControl('test', [Validators.required]),
      category: new FormControl(Category.Drama, [Validators.required]),
      description: new FormControl('test', [Validators.required]),
      price: new FormControl(1, [Validators.required]),
      quantity: new FormControl(1, [Validators.required]),
    });
    const book: BookDetail = {
      id: -1,
      title: 'test',
      image: 'test',
      price: 1,
      description: 'test',
      category: Category.Drama,
      quantity: 1,
    };
    component.onSubmit();
    expect(component.returnBook.emit).toHaveBeenCalledWith(book);
  });

  it('should onSubmit form not valid', () => {
    component.bookForm = new FormGroup({
      title: new FormControl('', [
        Validators.required,
        Validators.maxLength(30),
      ]),
      image: new FormControl('test', [Validators.required]),
      category: new FormControl(Category.Drama, [Validators.required]),
      description: new FormControl('test', [Validators.required]),
      price: new FormControl(1, [Validators.required]),
      quantity: new FormControl(1, [Validators.required]),
    });

    component.onSubmit();
    expect(component.returnBook.emit).not.toHaveBeenCalled();
  });
});
