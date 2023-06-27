import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBookComponent } from './edit-book.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { BookService } from 'src/app/shared/service/book.service';
import { of } from 'rxjs';
import { Category } from 'src/app/shared/model/book.model';

describe('EditBookComponent', () => {
  let component: EditBookComponent;
  let fixture: ComponentFixture<EditBookComponent>;
  let router: Router;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditBookComponent],
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [
        {
          provide: BookService,
          useValue: {
            putEditBook: () => {
              return of({});
            },
            getBookDetail: () => {
              return of({
                id: -1,
                title: 'test',
                image: 'test',
                price: 1,
                description: 'test',
                category: Category.Drama,
                quantity: 1,
              });
            },
          },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBookComponent);
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
