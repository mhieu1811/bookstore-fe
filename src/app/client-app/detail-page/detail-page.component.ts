import { Component, OnInit } from '@angular/core';
import BookDetail from '../../shared/model/book-detail.model';
import { Category } from '../../shared/model/book.model';
import { BookService } from '../../shared/service/book.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss'],
})
export class DetailPageComponent implements OnInit {
  book: BookDetail = {
    _id: '0',
    title: '',
    price: 0,
    category: Category.Comedy,
    quantity: 0,
    description: '',
    image: '',
  };
  constructor(private bookService: BookService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    const bookId = this.router.snapshot.paramMap.get('id')
    if (bookId)
      this.bookService.getBookDetail(bookId).subscribe((res) => {
        this.book = res;
      });
  }
}
