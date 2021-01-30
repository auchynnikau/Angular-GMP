import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as courses from '../reducers/courses.reducers';

export const selectCourses = createFeatureSelector<courses.State>('courses');
export const selectCourse = createSelector(
  selectCourses,
  (state: courses.State) => state.courses[0],
);
