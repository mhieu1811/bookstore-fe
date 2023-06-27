import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBookComponent } from './add-book.component';
import { Router } from '@angular/router';
import { BookService } from '../..//shared/service/book.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';

describe('AddBookComponent', () => {
  let component: AddBookComponent;
  let fixture: ComponentFixture<AddBookComponent>;
  let router: Router;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddBookComponent],
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [
        {
          provide: BookService,
          useValue: {
            postAddBook: () => {
              return of({});
            },
          },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.inject(Router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should onSubmit', () => {
    const navigateSpy = spyOn(router, 'navigate');
    component.onSubmit('test');
    expect(navigateSpy).toHaveBeenCalledWith(['/manage-books']);
  });
});
