import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import User from '../model/user.model';
import Register from '../model/register.model';
import { environment } from 'src/environments/environment';
import UserRespond from '../model/userRespond.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpClient: HttpClient) { }

  login(email: string, password: string): Observable<UserRespond> {
    return this.httpClient.post<UserRespond>(environment.auth.login, {
      email: email,
      password: password,
    });
  }

  register(register: Register): Observable<User> {
    return this.httpClient.post<User>(environment.auth.register, register);
  }
}
