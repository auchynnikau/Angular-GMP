import { createSelector } from '@ngrx/store';
import { UserInfo } from '../../shared/models/user';
import { selectAuthState } from './auth.selectors';
import * as auth from '../reducers/auth.reducers';

export const selectUser = createSelector(selectAuthState, (state: auth.State) => state.user);
export const selectUserName = createSelector(selectUser, (user: UserInfo) =>
  user ? `${user.name.first} ${user.name.last}` : '',
);
