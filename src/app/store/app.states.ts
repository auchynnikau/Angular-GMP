import { AuthState, authReducer } from './reducers/auth.reducers';
import { CoursesState, coursesReducer } from './reducers/courses.reducers';

export interface AppState {
  authState: AuthState;
  coursesState: CoursesState;
}

export const reducers = {
  auth: authReducer,
  courses: coursesReducer,
};
