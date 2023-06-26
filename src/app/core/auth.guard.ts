import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable({ providedIn: 'root' })
export class RoleGuard implements CanActivate {
  constructor(private router: Router, private cookieService: CookieService) { }

  canActivate(route: ActivatedRouteSnapshot) {
    const role = this.cookieService.get('role');
    if (route.data['roles'] && route.data['roles'] != role) {
      this.router.navigate(['/auth']);
      return false;
    }
    return true;
  }
}
