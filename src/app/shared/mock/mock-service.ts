import {
  InMemoryDbService,
  RequestInfo,
  ResponseOptions,
} from 'angular-in-memory-web-api';
import books from './data/book.mock';
import book from './data/book-detail';
import user from './data/user.mock';
import { Observable } from 'rxjs';
export class MockService implements InMemoryDbService {
  createDb() {
    return { books, book, user };
  }

  post(reqInfo: RequestInfo): Observable<any> | undefined {
    console.log('ref', reqInfo);
    if (reqInfo.collectionName === 'user' && reqInfo.id === 'login') {
      const { email, password } = reqInfo.utils.getJsonBody(reqInfo.req);

      const users = reqInfo.collection as any[];
      const user = users.find(
        (u) => u.email === email && u.password === password
      );

      if (user) {
        const response: ResponseOptions = {
          body: {
            userId: user.id,
            token: 'token_ne`',
            expireAt: '86400',
            name: user.name,
            role: user.role,
          },
          status: 200,
        };
        console.log(response);
        return reqInfo.utils.createResponse$(() => response);
      } else {
        const response: ResponseOptions = {
          body: { error: 'Invalid email or password' },
          status: 401,
        };

        return reqInfo.utils.createResponse$(() => response);
      }
    }

    return undefined;
  }
}
