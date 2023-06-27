import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ListPageComponent } from './list-page.component';
import { BookService } from 'src/app/shared/service/book.service';
import { of } from 'rxjs';
import { Category } from 'src/app/shared/model/book.model';

describe('ListPageComponent', () => {
  let component: ListPageComponent;
  let fixture: ComponentFixture<ListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListPageComponent],
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: BookService,
          useValue: {
            getBook: () => {
              return of([
                {
                  id: 1,
                  title: 'test',
                  price: 1,
                  category: Category.Drama,
                  image: 'image',
                },
              ]);
            },
          },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should getBook', () => {
    component.getBooks();

    expect(component.books).toEqual([
      {
        id: 1,
        title: 'test',
        price: 1,
        category: Category.Drama,
        image: 'image',
      },
    ]);
  });

  it('should onFilter work', () => {
    component.onFilter({ searchKey: 'test' });

    expect(component.filter).toEqual({ searchKey: 'test' });
  });
});
