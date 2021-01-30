import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { tap, map, switchMap, catchError } from 'rxjs/operators';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { AuthService } from 'src/app/shared/services/auth.service';
import { User } from 'src/app/shared/models/user';
import {
  AuthActionTypes,
  LogInSuccess,
  LogInFailure,
  GetUserInfoSuccess,
  GetUserInfoFailure,
} from '../actions/auth.actions';

@Injectable()
export class AuthEffects {
  constructor(private actions: Actions, private authService: AuthService) {}

  @Effect()
  LogIn: Observable<Action> = this.actions.pipe(
    ofType(AuthActionTypes.LOGIN),
    switchMap(({ payload }: any) => {
      return this.authService.login(payload.login, payload.password).pipe(
        map(({ token }: User) => {
          return new LogInSuccess({ token });
        }),
        catchError((error) => of(new LogInFailure(error))),
      );
    }),
  );

  @Effect({ dispatch: false })
  LogInSuccess: Observable<any> = this.actions.pipe(
    ofType(AuthActionTypes.LOGIN_SUCCESS),
    tap(({ payload }) => {
      this.authService.saveUserToken(payload.token);
    }),
  );

  @Effect({ dispatch: false })
  LogOut: Observable<any> = this.actions.pipe(
    ofType(AuthActionTypes.LOGOUT),
    tap(() => {
      this.authService.logout();
    }),
  );

  @Effect()
  GetUserInfo: Observable<Action> = this.actions.pipe(
    ofType(AuthActionTypes.LOGIN_SUCCESS),
    switchMap(() => {
      return this.authService.getUserInfo().pipe(
        map((response: User) => new GetUserInfoSuccess(response)),
        catchError((error) => of(new GetUserInfoFailure(error))),
      );
    }),
  );
}
