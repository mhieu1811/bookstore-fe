import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../service/storage.service';
import { AuthService } from '../../service/auth.service';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { combineLatest, forkJoin, map, take } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  userName?: string;
  userRole?: string;
  isLogin: boolean = false;
  isAdmin: boolean = false;
  constructor(
    private storageService: StorageService,
    private authService: AuthService,
    public oidcSecurityService: OidcSecurityService
  ) {}

  ngOnInit(): void {
    // const { name } = this.oidcSecurityService.getUserData();
    // this.userName = name;
    combineLatest([
      this.oidcSecurityService.isAuthenticated$,
      this.storageService.getName(),
    ]).subscribe(([{ isAuthenticated }, name]) => {
      this.isLogin = isAuthenticated;
      if (isAuthenticated) {
        const user = this.oidcSecurityService.getUserData();
        const resource = user.resource_access['angular-2'];
        if (resource && resource.roles.includes('admin')) this.isAdmin = true;
      }
      this.userName = name;
    });
  }

  logout() {
    this.authService.logout();
  }
  login() {
    this.authService.login();
  }
}
