import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  name: string = '';
  constructor() { }
  ngOnInit(): void { }
  isLogin() {
    return JSON.parse(localStorage.getItem('user')!);
  }
  logout(): void {
    if (localStorage.getItem('token')) {
      localStorage.removeItem('token');
    }
    if (localStorage.getItem('user')) {
      localStorage.removeItem('user');
    }
  }
  isAdmin() {
    if (JSON.parse(localStorage.getItem('user')!))
      if (JSON.parse(localStorage.getItem('user')!).role == 'admin')
        return true;
      else return false;
    return false;
  }
}
