import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBookComponent } from './list-book.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ListBookComponent', () => {
  let component: ListBookComponent;
  let fixture: ComponentFixture<ListBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListBookComponent],
      imports: [HttpClientTestingModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
