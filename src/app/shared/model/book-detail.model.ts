import { Category } from './book.model';

export default interface BookDetail {
  _id: string;
  title: string;
  price: number;
  category: Category;
  quantity: number;
  description: string;
  image: string;
}
