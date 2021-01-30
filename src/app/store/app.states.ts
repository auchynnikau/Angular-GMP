import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as auth from './reducers/auth.reducers';
import * as courses from './reducers/courses.reducers';
import { UserInfo } from '../shared/models/user';

export interface AppState {
  authState: auth.State;
  coursesState: courses.State;
}

export const reducers = {
  auth: auth.reducer,
  courses: courses.reducer,
};

export const selectCoursesState = createFeatureSelector<courses.State>('courses');
export const selectCourse = createSelector(
  selectCoursesState,
  (state: courses.State) => state.courses[0],
);
export const selectAuthState = createFeatureSelector<auth.State>('auth');
export const selectIsAuthenticated = createSelector(
  selectAuthState,
  (state: auth.State) => state.isAuthenticated,
);
export const selectUser = createSelector(selectAuthState, (state: auth.State) => state.user);
export const selectUserName = createSelector(selectUser, (user: UserInfo) =>
  user ? `${user.name.first} ${user.name.last}` : '',
);
