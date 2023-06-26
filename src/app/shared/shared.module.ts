import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './component/footer/footer.component';
import { HeaderComponent } from './component/header/header.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookService } from './service/book.service';
import { UserService } from './service/user.service';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { FilterComponent } from './component/filter/filter.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, FilterComponent],
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
export class SharedModule {}
