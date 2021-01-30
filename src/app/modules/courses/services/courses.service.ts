import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import urljoin from 'url-join';
import { CourseProps } from 'src/app/shared/models/course';
import { environment } from 'src/environments/environment';

const COURSES_URL = '/courses';
@Injectable()
export class CoursesService {
  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  getCoursesList(): Observable<CourseProps[]> {
    const { queryParams } = this.route.snapshot;
    const url = urljoin(environment.apiUrl, COURSES_URL);
    return this.http
      .get<CourseProps[]>(url, { params: queryParams })
      .pipe(map((response: CourseProps[]) => response));
  }

  getCoursesItem(id: string | number): Observable<CourseProps> {
    const url = urljoin(environment.apiUrl, COURSES_URL, id);
    return this.http.get<CourseProps>(url).pipe(map((response: CourseProps) => response));
  }

  createCourse(course: CourseProps): Observable<CourseProps> {
    const url = urljoin(environment.apiUrl, COURSES_URL);
    return this.http.post<CourseProps>(url, course).pipe(map((response: CourseProps) => response));
  }

  updateCourse(course: CourseProps): Observable<CourseProps> {
    const url = urljoin(environment.apiUrl, COURSES_URL, course.id.toString());
    return this.http.patch<CourseProps>(url, course).pipe(map((response: CourseProps) => response));
  }

  deleteCourse(id: string): Observable<void> {
    const url = urljoin(environment.apiUrl, COURSES_URL, id);
    return this.http.delete<void>(url);
  }
}
