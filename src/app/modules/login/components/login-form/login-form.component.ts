import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'vc-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  providers: [AuthService],
})
export class LoginFormComponent {
  constructor(private authService: AuthService) {}

  email: string;
  password: string;

  login() {
    this.authService.login();
    console.log('Logged successfully...')
  }
}
