import { Pipe, PipeTransform } from '@angular/core';
import { Course } from '../models/course';

@Pipe({ name: 'orderBy' })
export class OrderByPipe implements PipeTransform {
  transform(courses: Course[]): Course[] {
    const sortedCourses = courses.sort((prev: Course, next: Course) => {
      return new Date(prev.creationDate).getTime() - new Date(next.creationDate).getTime();
    });

    return sortedCourses;
  }
}
