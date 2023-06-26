import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class StorageService {
    private nameSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
    private roleSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');

    constructor(private cookieService: CookieService) {
        const nameFromCookie = this.getProperty('name');
        const roleFromCookie = this.getProperty('role');

        this.nameSubject.next(nameFromCookie);
        this.roleSubject.next(roleFromCookie)
    }

    getName(): Observable<string> {
        return this.nameSubject.asObservable();
    }

    getRole(): Observable<string> {
        return this.roleSubject.asObservable();
    }

    getProperty(key: string) {
        return this.cookieService.get(key);
    }

    saveCookie(token: string, name: string, role: string) {
        this.cookieService.set('token', token);
        this.cookieService.set('name', name);
        this.cookieService.set('role', role);

        this.nameSubject.next(name);
        this.roleSubject.next(role);
    }

    clearCookie() {
        this.cookieService.delete('token');
        this.cookieService.delete('name');
        this.cookieService.delete('role');

        this.nameSubject.next('');
        this.roleSubject.next('');
    }
}
