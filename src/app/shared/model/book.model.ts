export default interface Book {
  _id: string;
  title: string;
  price: number;
  category: Category;
  image: string;
}

export enum Category {
  Drama = 'Drama',
  Sport = 'Sport',
  Comedy = 'Comedy',
}
