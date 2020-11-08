import { Pipe, PipeTransform } from '@angular/core';
import { Course } from '../models/course';

@Pipe({ name: 'filter' })
export class FilterPipe implements PipeTransform {
  transform(searchQuery: string, courses: Course[]): Course[] {
    return courses.filter((course: Course) => {
      return searchQuery.toLowerCase().includes(course.title.toLowerCase());
    });
  }
}
