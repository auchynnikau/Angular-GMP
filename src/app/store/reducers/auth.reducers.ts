import { UserInfo } from 'src/app/shared/models/user';
import { AuthActionTypes, AuthActions } from '../actions/auth.actions';

export interface State {
  isAuthenticated: boolean;
  errorMessage: string | null;
  user: UserInfo | null;
  token: string | null;
}

export const initialState: State = {
  isAuthenticated: false,
  errorMessage: null,
  token: null,
  user: null,
};

export function reducer(state = initialState, action: AuthActions): State {
  switch (action.type) {
    case AuthActionTypes.LOGIN: {
      return {
        ...state,
        errorMessage: null,
      };
    }
    case AuthActionTypes.LOGIN_SUCCESS: {
      return {
        ...state,
        isAuthenticated: true,
        token: action.payload.token,
        errorMessage: null,
      };
    }
    case AuthActionTypes.LOGIN_FAILURE: {
      return {
        ...state,
        errorMessage: action.payload,
      };
    }
    case AuthActionTypes.LOGOUT: {
      return initialState;
    }
    case AuthActionTypes.GET_USER_INFO: {
      return {
        ...state,
        errorMessage: null,
      };
    }
    case AuthActionTypes.GET_USER_INFO_SUCCESS: {
      return {
        ...state,
        user: { ...action.payload },
        errorMessage: null,
      };
    }
    case AuthActionTypes.GET_USER_INFO_FAILURE: {
      return {
        ...state,
        errorMessage: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}
