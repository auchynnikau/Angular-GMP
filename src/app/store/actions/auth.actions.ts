import { Action } from '@ngrx/store';

export enum AuthActionTypes {
  LOGIN = '[Auth] Login',
  LOGIN_SUCCESS = '[Auth] Login Success',
  LOGIN_FAILURE = '[Auth] Login Failure',
  LOGOUT = '[Auth] Logout',
  GET_USER_INFO = '[Auth] Get User Info',
  GET_USER_INFO_SUCCESS = '[Auth] Get User Info Success',
  GET_USER_INFO_FAILURE = '[Auth] Get User Info Failure',
}

export class LogIn implements Action {
  readonly type = AuthActionTypes.LOGIN;
  constructor(public payload: any) {}
}

export class LogInSuccess implements Action {
  readonly type = AuthActionTypes.LOGIN_SUCCESS;
  constructor(public payload: any) {}
}

export class LogInFailure implements Action {
  readonly type = AuthActionTypes.LOGIN_FAILURE;
  constructor(public payload: any) {}
}

export class LogOut implements Action {
  readonly type = AuthActionTypes.LOGOUT;
}

export class GetUserInfo implements Action {
  readonly type = AuthActionTypes.GET_USER_INFO;
}

export class GetUserInfoSuccess implements Action {
  readonly type = AuthActionTypes.GET_USER_INFO_SUCCESS;
  constructor(public payload: any) {}
}

export class GetUserInfoFailure implements Action {
  readonly type = AuthActionTypes.GET_USER_INFO_FAILURE;
  constructor(public payload: any) {}
}

export type AuthActions =
  | LogIn
  | LogInSuccess
  | LogInFailure
  | LogOut
  | GetUserInfo
  | GetUserInfoSuccess
  | GetUserInfoFailure;
