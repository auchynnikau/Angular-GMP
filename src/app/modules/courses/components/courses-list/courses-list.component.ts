import { Component, OnInit, Input } from '@angular/core';
import { coursesMocks } from '../../../../shared/mocks/courses';
import { CourseProps } from '../../../../shared/models/course';

@Component({
  selector: 'vc-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
})
export class CoursesListComponent implements OnInit {
  courses: CourseProps[] = [];

  @Input() searchQuery: string;

  ngOnInit(): void {
    this.courses = coursesMocks;
  }

  loadMore(): void {
    console.log('load more');
  }

  deleteCourse(id: string): void {
    console.log('delete: ', id);
  }

  editCourse(id: string): void {
    console.log('edit: ', id);
  }
}
