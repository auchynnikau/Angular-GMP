import { Pipe, PipeTransform } from '@angular/core';
import { Course } from '../models/course';

@Pipe({ name: 'filter' })
export class FilterPipe implements PipeTransform {
  transform(courses: Course[], searchQuery: string): Course[] {
    if (searchQuery) {
      return courses.filter(({ title }: Course): boolean => {
        return title.toLowerCase().includes(searchQuery.toLowerCase());
      });
    }

    return courses;
  }
}
