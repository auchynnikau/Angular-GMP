import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { AppState, selectAuthState } from 'src/app/store/app.states';
import { LogIn } from 'src/app/store/actions/auth.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'vc-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  providers: [AuthService],
})
export class LoginFormComponent implements OnInit {
  constructor(
    private store: Store<AppState>,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.getState = this.store.select(selectAuthState);
  }

  getState: Observable<any>;
  isAuthenticated: false;
  isPasswordShown = true;
  redirect = '';
  userInfo = {
    password: '',
    login: '',
  };

  ngOnInit() {
    this.getState.subscribe((state) => {
      this.isAuthenticated = state.isAuthenticated;
    });

    this.route.queryParams.subscribe((params): void => {
      this.redirect = params.return || '/courses';
      if (this.isAuthenticated) {
        this.router.navigateByUrl(this.redirect);
      }
    });
  }

  onSubmit(): void {
    this.store.dispatch(new LogIn(this.userInfo));
  }
}
