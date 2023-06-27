import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Register from '../../shared/model/register.model';
import { UserService } from '../../shared/service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  registerForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
      ),
    ]),
  });
  constructor(private userService: UserService, public router: Router) {}

  onSubmit() {
    if (this.registerForm.invalid) {
      return;
    }
    const registerUser: Register = {
      name: this.registerForm.get('name')?.value,
      email: this.registerForm.get('email')?.value,
      password: this.registerForm.get('password')?.value,
    };
    this.userService.register(registerUser).subscribe((res) => {
      this.router.navigate(['/auth']);
    });

    console.log(this.registerForm.controls['password'].errors);
  }
}
