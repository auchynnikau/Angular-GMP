import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'vc-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  providers: [AuthService],
})
export class LoginFormComponent {
  constructor(private authService: AuthService) {}

  email: FormControl = new FormControl('', [Validators.required, Validators.email]);

  password: string;

  isPasswordShown = true;

  login({ value: email }: FormControl, password: string) {
    this.authService.login(email, password);
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
}
