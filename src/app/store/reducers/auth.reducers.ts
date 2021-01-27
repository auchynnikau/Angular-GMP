import { UserInfo } from 'src/app/shared/models/user';
import { AuthActionTypes, All } from '../actions/auth.actions';

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

export function reducer(state = initialState, action: All): State {
  switch (action.type) {
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
        errorMessage: 'Incorrect email and/or password.',
      };
    }
    case AuthActionTypes.LOGOUT: {
      return initialState;
    }
    default: {
      return state;
    }
  }
}
