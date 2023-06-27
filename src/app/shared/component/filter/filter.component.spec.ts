import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterComponent } from './filter.component';

describe('FilterComponent', () => {
  let component: FilterComponent;
  let fixture: ComponentFixture<FilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FilterComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.filter = jasmine.createSpyObj(['emit']);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call onSubmit', () => {
    component.searchKey = 'test';
    component.selectOptions = 'drama';
    component.onSubmit();
    expect(component.filter.emit).toHaveBeenCalledWith({
      searchKey: 'test',
      selectOptions: 'drama',
    });
  });
});
