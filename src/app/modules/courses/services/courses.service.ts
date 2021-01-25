import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { CourseProps } from 'src/app/shared/models/course';
import { environment } from 'src/environments/environment';
import urljoin from 'url-join';

const COURSES_URL = '/courses';

@Injectable()
export class CoursesService {
  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  private _courses = new BehaviorSubject<CourseProps[]>([]);
  private dataStore: { courses: CourseProps[] } = { courses: [] };
  readonly courses = this._courses.asObservable();

  getCoursesList(): void {
    const { queryParams } = this.route.snapshot;
    const url = urljoin(environment.apiUrl, COURSES_URL);
    this.http
      .get<CourseProps[]>(url, { params: queryParams })
      .subscribe(
        (data: CourseProps[]) => {
          this.dataStore.courses = data;
          this._courses.next({ ...this.dataStore }.courses);
        },
        () => console.error('Could not load courses.'),
      );
  }

  getCoursesItem(id: string | number): void {
    const url = urljoin(environment.apiUrl, COURSES_URL, id);
    this.http.get<CourseProps>(url).subscribe(
      (data) => {
        let notFound = true;

        this.dataStore.courses.forEach((item, index) => {
          if (item.id === data.id) {
            this.dataStore.courses[index] = data;
            notFound = false;
          }
        });

        if (notFound) {
          this.dataStore.courses.push(data);
        }

        this._courses.next({ ...this.dataStore }.courses);
      },
      () => console.error('Could not load course.'),
    );
  }

  createCourse(course: CourseProps): void {
    const url = urljoin(environment.apiUrl, COURSES_URL);
    this.http.post<CourseProps>(url, course).subscribe(
      (data) => {
        this.dataStore.courses.push(data);
        this._courses.next({ ...this.dataStore }.courses);
      },
      () => console.error('Could not create course.'),
    );
  }

  updateCourse(course: CourseProps): void {
    const url = urljoin(environment.apiUrl, COURSES_URL, course.id.toString());
    this.http.patch<CourseProps>(url, course).subscribe(
      (data) => {
        this.dataStore.courses.forEach((item, index) => {
          if (item.id === data.id) {
            this.dataStore.courses[index] = data;
          }
        });

        this._courses.next({ ...this.dataStore }.courses);
      },
      () => console.error('Could not update course.'),
    );
  }

  deleteCourse(id: string): void {
    const url = urljoin(environment.apiUrl, COURSES_URL, id);
    this.http.delete<CourseProps>(url).subscribe(
      () => {
        this.dataStore.courses.forEach((item, index) => {
          if (item.id === id) {
            this.dataStore.courses.splice(index, 1);
          }
        });

        this._courses.next({ ...this.dataStore }.courses);
      },
      () => console.error('Could not delete course.'),
    );
  }
}
