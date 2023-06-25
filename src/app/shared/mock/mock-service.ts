import { InMemoryDbService } from 'angular-in-memory-web-api';
import books from './data/book.mock';
import book from './data/book-detail';
import user from './data/user.mock';
export class MockService implements InMemoryDbService {
  createDb() {
    return { books, book, user };
  }
}
