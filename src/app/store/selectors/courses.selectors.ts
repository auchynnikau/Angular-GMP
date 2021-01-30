import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Course } from 'src/app/shared/models/course';
import { CoursesState } from '../reducers/courses.reducers';

export const featureCourses = createFeatureSelector<CoursesState>('courses');
export const selectCourses = createSelector(
  featureCourses,
  (state: CoursesState): Course[] => state.courses,
);
export const selectCourse = createSelector(
  featureCourses,
  (state: CoursesState): Course => state.selectedCourse,
);
export const selectCourseName = createSelector(
  selectCourse,
  (course: Course): string => course.name,
);
