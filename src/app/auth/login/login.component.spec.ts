import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { LoginComponent } from './login.component';
import { UserService } from 'src/app/shared/service/user.service';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
      ],
      providers: [
        {
          provide: UserService,
          useValue: {
            login: (email: string) => {
              if (email === 'failcase@mail') return of({});
              return of({ token: 'co' });
            },
          },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.inject(Router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should detect change login form', () => {
    component.loginForm = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl(''),
    });
    component.ngOnInit();
    component.validatMessage = 'test';
    component.loginForm.controls['email'].setValue('abc');
    expect(component.validatMessage).toEqual('');
  });

  it('should onSubmit return true', () => {
    component.loginForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
    });

    component.onSubmit();
    expect(component.validatMessage).toEqual('');
  });

  it('should onSubmit return form invalid', () => {
    component.loginForm = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl(''),
    });
    const navigateSpy = spyOn(router, 'navigate');
    component.onSubmit();
    expect(navigateSpy).not.toHaveBeenCalledWith(['/']);
  });

  it('should onSubmit login fail', () => {
    component.loginForm = new FormGroup({
      email: new FormControl('failcase@mail', [
        Validators.email,
        Validators.required,
      ]),
      password: new FormControl(''),
    });
    component.onSubmit();
    expect(component.validatMessage).toEqual(
      'Username or password is incorrect'
    );
  });
});
