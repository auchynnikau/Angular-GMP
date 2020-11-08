import { Pipe, PipeTransform } from '@angular/core';
import { Course } from '../models/course';

@Pipe({ name: 'orderBy' })
export class OrderByPipe implements PipeTransform {
  transform(courses: Course[], orderedBy: string = 'creationDate'): Course[] {
    return courses.sort((prev: Course, next: Course): number => {
      return new Date(prev[orderedBy]).getTime() - new Date(next[orderedBy]).getTime();
    });
  }
}
