import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState, selectIsAuthenticated } from 'src/app/store/app.states';
import { LogIn } from 'src/app/store/actions/auth.actions';

@Component({
  selector: 'vc-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  constructor(
    private store: Store<AppState>,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  private isAuthenticated$: Observable<boolean> = this.store.select(selectIsAuthenticated);
  public isPasswordShown = true;
  public redirect = '';
  public userInfo = {
    password: '',
    login: '',
  };

  ngOnInit() {
    this.route.queryParams.subscribe((params): void => {
      this.redirect = params.return || '/courses';
      if (this.isAuthenticated$) {
        this.router.navigateByUrl(this.redirect);
      }
    });
  }

  onSubmit(): void {
    this.store.dispatch(new LogIn({ ...this.userInfo }));
  }
}
