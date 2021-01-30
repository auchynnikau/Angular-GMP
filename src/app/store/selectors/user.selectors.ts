import { createSelector } from '@ngrx/store';
import { User } from '../../shared/models/user';
import { selectAuthState } from './auth.selectors';
import { AuthState } from '../reducers/auth.reducers';

export const selectUser = createSelector(selectAuthState, (state: AuthState): User => state.user);
export const selectUserName = createSelector(selectUser, (user: User): string =>
  user ? `${user.name.first} ${user.name.last}` : '',
);
