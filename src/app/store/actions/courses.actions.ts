import { Action } from '@ngrx/store';
import { Course } from 'src/app/shared/models/course';

export enum CoursesActionTypes {
  LOAD_COURSES = '[Courses] Load Courses',
  LOAD_COURSES_SUCCESS = '[Courses] Load Courses Success',
  LOAD_COURSES_FAILURE = '[Courses] Load Courses Failure',

  LOAD_COURSE = '[Courses] Load Course',
  LOAD_COURSE_SUCCESS = '[Courses] Load Course Success',
  LOAD_COURSE_FAILURE = '[Courses] Load Course Failure',

  CREATE_COURSE = '[Courses] Create Course',
  CREATE_COURSE_SUCCESS = '[Courses] Create Course Success',
  CREATE_COURSE_FAILURE = '[Courses] Create Course Failure',

  UPDATE_COURSE = '[Courses] Update Course',
  UPDATE_COURSE_SUCCESS = '[Courses] Update Course Success',
  UPDATE_COURSE_FAILURE = '[Courses] Update Course Failure',

  DELETE_COURSE = '[Courses] Delete Course',
  DELETE_COURSE_SUCCESS = '[Courses] Delete Course Success',
  DELETE_COURSE_FAILURE = '[Courses] Delete Course Failure',
}

export class LoadCourses implements Action {
  readonly type = CoursesActionTypes.LOAD_COURSES;
}

export class LoadCoursesSuccess implements Action {
  readonly type = CoursesActionTypes.LOAD_COURSES_SUCCESS;
  constructor(public payload: Course[]) {}
}

export class LoadCoursesFailure implements Action {
  readonly type = CoursesActionTypes.LOAD_COURSES_FAILURE;
  constructor(public payload: any) {}
}

export class LoadCourse implements Action {
  readonly type = CoursesActionTypes.LOAD_COURSE;
  constructor(public payload: string | number) {}
}

export class LoadCourseSuccess implements Action {
  readonly type = CoursesActionTypes.LOAD_COURSE_SUCCESS;
  constructor(public payload: Course) {}
}

export class LoadCourseFailure implements Action {
  readonly type = CoursesActionTypes.LOAD_COURSE_FAILURE;
  constructor(public payload: any) {}
}

export class CreateCourse implements Action {
  readonly type = CoursesActionTypes.CREATE_COURSE;
  constructor(public payload: Course) {}
}

export class CreateCourseSuccess implements Action {
  readonly type = CoursesActionTypes.CREATE_COURSE_SUCCESS;
}

export class CreateCourseFailure implements Action {
  readonly type = CoursesActionTypes.CREATE_COURSE_FAILURE;
  constructor(public payload: any) {}
}

export class UpdateCourse implements Action {
  readonly type = CoursesActionTypes.UPDATE_COURSE;
  constructor(public payload: Course) {}
}

export class UpdateCourseSuccess implements Action {
  readonly type = CoursesActionTypes.UPDATE_COURSE_SUCCESS;
}

export class UpdateCourseFailure implements Action {
  readonly type = CoursesActionTypes.UPDATE_COURSE_FAILURE;
  constructor(public payload: any) {}
}

export class DeleteCourse implements Action {
  readonly type = CoursesActionTypes.DELETE_COURSE;
  constructor(public payload: string) {}
}

export class DeleteCourseSuccess implements Action {
  readonly type = CoursesActionTypes.DELETE_COURSE_SUCCESS;
}

export class DeleteCourseFailure implements Action {
  readonly type = CoursesActionTypes.DELETE_COURSE_FAILURE;
  constructor(public payload: any) {}
}

export type CoursesActions =
  | LoadCourses
  | LoadCoursesSuccess
  | LoadCoursesFailure
  | LoadCourse
  | LoadCourseSuccess
  | LoadCourseFailure
  | CreateCourse
  | CreateCourseSuccess
  | CreateCourseFailure
  | UpdateCourse
  | UpdateCourseSuccess
  | UpdateCourseFailure
  | DeleteCourse
  | DeleteCourseSuccess
  | DeleteCourseFailure;
