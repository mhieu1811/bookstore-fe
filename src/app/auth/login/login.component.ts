import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../shared/service/user.service';
import { Router } from '@angular/router';
import { StorageService } from '../../shared/service/storage.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  $destroy = new Subject();
  validatMessage: string = '';
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
      ),
    ]),
  });

  constructor(
    private userService: UserService,
    private router: Router,
    private storageService: StorageService
  ) {}

  ngOnInit(): void {
    this.loginForm.valueChanges.pipe(takeUntil(this.$destroy)).subscribe(() => {
      this.validatMessage = '';
    });
  }

  ngOnDestroy(): void {
    this.$destroy.next(null);
    this.$destroy.complete();
  }
  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }
    const email = this.loginForm.get('email')?.value;
    const password = this.loginForm.get('password')?.value;
    this.userService.login(email, password).subscribe((res) => {
      if (!res.token) {
        this.validatMessage = 'Username or password is incorrect';
        return;
      }
      this.storageService.saveCookie(res.token, res.name, res.role);
      this.router.navigate(['/']);
    });
  }
}
