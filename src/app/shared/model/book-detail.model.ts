import { Category } from './book.model';

export default interface BookDetail {
  id: number;
  title: string;
  price: number;
  category: Category;
  quantity: number;
  description: string;
  image: string;
}
