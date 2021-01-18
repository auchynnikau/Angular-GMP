import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService, Token } from 'src/app/shared/services/auth.service';

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

  isPasswordShown = true;
  password = '';
  redirect = '';
  login = '';

  ngOnInit() {
    this.route.queryParams.subscribe((params): void => {
      this.redirect = params.return || '/courses';
      this.checkRedirect();
    });
  }

  logIn(login: string, password: string): void {
    this.authService.login(login, password).subscribe((data: Token): void => {
      localStorage.setItem('token', data.token);
      this.checkRedirect();
    });
  }

  checkRedirect(): void {
    if (this.authService.isAuthenticated) {
      this.router.navigateByUrl(this.redirect);
    }
  }
}
