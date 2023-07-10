import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  OnInit,
} from '@angular/core';
import { StorageService } from '../../service/storage.service';
import { AuthService } from '../../service/auth.service';
import { OidcSecurityService } from 'angular-auth-oidc-client';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  userName?: string;
  userRole?: string;

  constructor(
    private storageService: StorageService,
    private authService: AuthService,
    public oidcSecurityService: OidcSecurityService
  ) {}

  ngOnInit(): void {
    // const { name } = this.oidcSecurityService.getUserData();
    // this.userName = name;
    this.storageService.getName().subscribe((name) => {
      this.userName = name;
    });
  }

  logout() {
    this.authService.logout();
  }
  login() {
    this.authService.login();
    const { name } = this.oidcSecurityService.getUserData();
    sessionStorage.setItem('name', 'hieu');
  }
}
