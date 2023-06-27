import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { UserService } from '../..//shared/service/user.service';
import { of } from 'rxjs';
import { Router } from '@angular/router';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterComponent],
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
            register: () => {
              return of('success');
            },
          },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.inject(Router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to /login', () => {
    component.registerForm = new FormGroup({
      name: new FormControl('test'),
      email: new FormControl('admin@admin', [
        Validators.required,
        Validators.email,
      ]),
      password: new FormControl('Abc@1234567', [
        Validators.required,
        Validators.pattern(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
        ),
      ]),
    });
    const navigateSpy = spyOn(router, 'navigate');
    component.onSubmit();
    expect(navigateSpy).toHaveBeenCalledWith(['/auth']);
  });

  it('should navigate to /login', () => {
    component.registerForm = new FormGroup({
      name: new FormControl('test'),
      email: new FormControl('admin', [Validators.required, Validators.email]),
      password: new FormControl('Abc@1234567', [
        Validators.required,
        Validators.pattern(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
        ),
      ]),
    });
    const navigateSpy = spyOn(router, 'navigate');
    component.onSubmit();
    expect(navigateSpy).not.toHaveBeenCalledWith(['/auth']);
  });
});
