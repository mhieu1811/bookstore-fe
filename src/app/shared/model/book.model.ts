export default interface Book {
  id: number;
  title: string;
  price: number;
  category: Category;
  image: string;
}

export enum Category {
  Drama = 'drama',
  Sport = 'sport',
  Comedy = 'comedy',
}
