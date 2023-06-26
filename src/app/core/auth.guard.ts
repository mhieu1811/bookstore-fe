import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
} from '@angular/router';

@Injectable({ providedIn: 'root' })
export class RoleGuard implements CanActivate {
  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot) {
    const user = JSON.parse(localStorage.getItem('user')!);
    if (route.data['roles'] && route.data['roles'] != user.role) {
      this.router.navigate(['/unauthorized']);
      return false;
    }
    return true;
  }
}
