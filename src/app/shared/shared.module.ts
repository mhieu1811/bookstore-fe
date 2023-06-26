import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './component/header/header.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { FilterComponent } from './component/filter/filter.component';

@NgModule({
  declarations: [HeaderComponent, FilterComponent],
  imports: [
    CommonModule,
    MatPaginatorModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MatButtonModule,
  ],
  exports: [
    HeaderComponent,
    MatPaginatorModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    FilterComponent,
  ],
})
export class SharedModule { }
