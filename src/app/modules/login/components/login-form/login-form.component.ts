import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'vc-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  providers: [AuthService],
})
export class LoginFormComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  email: FormControl = new FormControl('', [Validators.required, Validators.email]);

  isPasswordShown = true;

  password = '';

  redirect = '';

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.redirect = params.return || '/courses';
    });

    this.checkRedirect();
  }

  login({ value: email }: FormControl, password: string) {
    this.authService.login(email, password);
    this.checkRedirect();
  }

  checkRedirect() {
    if (this.authService.isAuthenticated) {
      this.router.navigateByUrl(this.redirect);
    }
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
}
