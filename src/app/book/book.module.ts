import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookRoutingModule } from './book-routing.module';
import { AddBookComponent } from './add-book/add-book.component';
import { ListBookComponent } from './list-book/list-book.component';
import { SharedModule } from '../shared/shared.module';
import { MatTableModule } from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms';
import { BookFormComponent } from './_component/book-form/book-form.component';
import { EditBookComponent } from './edit-book/edit-book.component';

@NgModule({
  declarations: [
    AddBookComponent,
    ListBookComponent,
    BookFormComponent,
    EditBookComponent,
  ],
  imports: [
    CommonModule,
    BookRoutingModule,
    MatTableModule,
    SharedModule,
    ReactiveFormsModule,
  ],
})
export class BookModule {}
