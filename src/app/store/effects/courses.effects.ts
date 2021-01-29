import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { switchMap, mergeMap, map, catchError } from 'rxjs/operators';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { CoursesService } from 'src/app/modules/courses/services/courses.service';
import { CourseProps } from 'src/app/shared/models/course';
import {
  CoursesActionTypes,
  LoadCourses,
  LoadCoursesSuccess,
  LoadCoursesFailure,
  LoadCourse,
  LoadCourseSuccess,
  LoadCourseFailure,
  CreateCourse,
  CreateCourseSuccess,
  CreateCourseFailure,
  UpdateCourse,
  UpdateCourseSuccess,
  UpdateCourseFailure,
  DeleteCourse,
  DeleteCourseSuccess,
  DeleteCourseFailure,
} from '../actions/courses.actions';

@Injectable()
export class CoursesEffects {
  constructor(private actions: Actions, private coursesService: CoursesService) {}

  @Effect()
  LoadCourses: Observable<Action> = this.actions.pipe(
    ofType(CoursesActionTypes.LOAD_COURSES),
    switchMap(() => {
      return this.coursesService.getCoursesList().pipe(
        map((courses: CourseProps[]) => new LoadCoursesSuccess(courses)),
        catchError((error) => of(new LoadCoursesFailure(error))),
      );
    }),
  );

  @Effect()
  LoadCourse: Observable<Action> = this.actions.pipe(
    ofType(CoursesActionTypes.LOAD_COURSE),
    switchMap((action: LoadCourse) => {
      return this.coursesService.getCoursesItem(action.payload).pipe(
        map((course: CourseProps) => new LoadCourseSuccess(course)),
        catchError((error) => of(new LoadCourseFailure(error))),
      );
    }),
  );

  @Effect()
  CreateCourse: Observable<Action> = this.actions.pipe(
    ofType(CoursesActionTypes.CREATE_COURSE),
    switchMap((action: CreateCourse) => {
      return this.coursesService.createCourse(action.payload).pipe(
        mergeMap(() => [new LoadCourses(), new CreateCourseSuccess()]),
        catchError((error) => of(new CreateCourseFailure(error))),
      );
    }),
  );

  @Effect()
  UpdateCourse: Observable<Action> = this.actions.pipe(
    ofType(CoursesActionTypes.UPDATE_COURSE),
    switchMap((action: UpdateCourse) => {
      return this.coursesService.updateCourse(action.payload).pipe(
        mergeMap(() => [new LoadCourses(), new UpdateCourseSuccess()]),
        catchError((error) => of(new UpdateCourseFailure(error))),
      );
    }),
  );

  @Effect()
  DeleteCourse: Observable<Action> = this.actions.pipe(
    ofType(CoursesActionTypes.DELETE_COURSE),
    switchMap((action: DeleteCourse) => {
      return this.coursesService.deleteCourse(action.payload).pipe(
        mergeMap(() => [new DeleteCourseSuccess(), new LoadCourses()]),
        catchError((error) => of(new DeleteCourseFailure(error))),
      );
    }),
  );
}
