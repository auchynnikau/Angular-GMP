import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { tap, map, switchMap, catchError } from 'rxjs/operators';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { AuthService } from 'src/app/shared/services/auth.service';
import { AuthActionTypes, LogIn, LogInSuccess, LogInFailure } from '../actions/auth.actions';

@Injectable()
export class AuthEffects {
  constructor(private actions: Actions, private authService: AuthService, private router: Router) {}

  @Effect()
  LogIn: Observable<any> = this.actions.pipe(
    ofType(AuthActionTypes.LOGIN),
    map((action: LogIn) => action.payload),
    switchMap((payload) => {
      return this.authService.login(payload.login, payload.password).pipe(
        map((user) => {
          return new LogInSuccess({ token: user.token });
        }),
      );
      // TODO: check error handling
      // catchError((error) => {
      //   return of(new LogInFailure(error));
      // })
    }),
  );

  @Effect({ dispatch: false })
  LogInSuccess: Observable<any> = this.actions.pipe(
    ofType(AuthActionTypes.LOGIN_SUCCESS),
    map((action: LogInSuccess) => action.payload),
    tap((payload) => {
      localStorage.setItem('token', payload.token);
      this.router.navigateByUrl('/');
    }),
  );

  @Effect({ dispatch: false })
  LogInFailure: Observable<any> = this.actions.pipe(ofType(AuthActionTypes.LOGIN_FAILURE));

  @Effect({ dispatch: false })
  LogOut: Observable<any> = this.actions.pipe(
    ofType(AuthActionTypes.LOGOUT),
    tap(() => {
      this.authService.logout();
    }),
  );
}
