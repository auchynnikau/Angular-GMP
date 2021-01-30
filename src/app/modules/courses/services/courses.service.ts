import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import urljoin from 'url-join';
import { Course } from 'src/app/shared/models/course';
import { environment } from 'src/environments/environment';

const COURSES_URL = '/courses';
@Injectable()
export class CoursesService {
  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  getCoursesList(): Observable<Course[]> {
    const { queryParams } = this.route.snapshot;
    const url = urljoin(environment.apiUrl, COURSES_URL);
    return this.http
      .get<Course[]>(url, { params: queryParams })
      .pipe(map((response: Course[]) => response));
  }

  getCoursesItem(id: string | number): Observable<Course> {
    const url = urljoin(environment.apiUrl, COURSES_URL, id);
    return this.http.get<Course>(url).pipe(map((response: Course) => response));
  }

  createCourse(course: Course): Observable<Course> {
    const url = urljoin(environment.apiUrl, COURSES_URL);
    return this.http.post<Course>(url, course).pipe(map((response: Course) => response));
  }

  updateCourse(course: Course): Observable<Course> {
    const url = urljoin(environment.apiUrl, COURSES_URL, course.id.toString());
    return this.http.patch<Course>(url, course).pipe(map((response: Course) => response));
  }

  deleteCourse(id: string): Observable<void> {
    const url = urljoin(environment.apiUrl, COURSES_URL, id);
    return this.http.delete<void>(url);
  }
}
