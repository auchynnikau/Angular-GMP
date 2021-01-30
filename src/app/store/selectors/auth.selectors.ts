import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as auth from '../reducers/auth.reducers';

export const selectAuthState = createFeatureSelector<auth.State>('auth');
export const selectIsAuthenticated = createSelector(
  selectAuthState,
  (state: auth.State) => state.isAuthenticated,
);
