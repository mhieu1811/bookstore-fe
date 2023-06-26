import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  @Input() optionName?: string;
  @Input() optionList?: string[];
  @Input() canSearch: Boolean = true;
  @Output() filter: EventEmitter<{
    selectOptions: string;
    searchKey: string;
  }> = new EventEmitter();

  selectOptions: string = 'all';
  searchKey: string = '';

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    this.onFilter();
  }

  onFilter(): void {
    const filter: any = {
      searchKey: this.searchKey,
      selectOptions: this.selectOptions,
    };
    this.filter.emit(filter);
  }
}
