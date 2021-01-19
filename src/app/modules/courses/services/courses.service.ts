import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CourseProps } from 'src/app/shared/models/course';
import { environment } from 'src/environments/environment';
import urljoin from 'url-join';

const COURSES_URL = '/courses';

@Injectable()
export class CoursesService {
  constructor(private http: HttpClient) {}

  getCoursesList(count: number = 5): Observable<CourseProps[]> {
    const url = urljoin(environment.apiUrl, COURSES_URL, `?count=${count}`);
    return this.http.get<CourseProps[]>(url);
  }

  getCoursesItem(id: string): Observable<CourseProps> {
    const url = urljoin(environment.apiUrl, COURSES_URL, id);
    return this.http.get<CourseProps>(url);
  }

  createCourse(course: CourseProps): void {
    const url = urljoin(environment.apiUrl, COURSES_URL);
    this.http.post<CourseProps>(url, course);
  }

  updateCourse(course: CourseProps): void {
    const url = urljoin(environment.apiUrl, COURSES_URL, course.id.toString());
    this.http.patch<CourseProps>(url, course);
  }

  deleteCourse(id: string): void {
    const url = urljoin(environment.apiUrl, COURSES_URL, id);
    this.http.delete<CourseProps>(url);
  }
}
