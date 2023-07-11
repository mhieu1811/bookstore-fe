import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import {
  OidcSecurityService,
  AuthenticatedResult,
} from 'angular-auth-oidc-client';
import { CookieService } from 'ngx-cookie-service';
import { Observable, map, take } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class RoleGuard implements CanActivate {
  constructor(
    private oidcSecurityService: OidcSecurityService,
    private router: Router
  ) {}

  canActivate(): Observable<boolean | UrlTree> {
    return this.oidcSecurityService.isAuthenticated$.pipe(
      take(1),
      map(({ isAuthenticated }) => {
        // allow navigation if authenticated
        if (isAuthenticated) {
          const user = this.oidcSecurityService.getUserData();
          const resource = user.resource_access['angular-2'];
          if (resource && resource.roles.includes('admin')) return true;
        }

        // redirect if not authenticated
        return this.router.parseUrl('/');
      })
    );
  }
}
