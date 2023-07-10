import { Component, OnInit } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { StorageService } from './shared/service/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'bookstore-fe';
  constructor(
    public oidcSecurityService: OidcSecurityService,
    private storageService: StorageService
  ) {}

  ngOnInit() {
    this.oidcSecurityService
      .checkAuth()
      .subscribe(({ isAuthenticated, userData }) => {
        this.storageService.saveDataUser(userData.name);
        const user = this.oidcSecurityService.getUserData();
        console.log(user);
        console.log(userData);
      });
  }
}
