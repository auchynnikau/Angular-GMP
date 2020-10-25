import { Component, OnInit } from '@angular/core';
import { coursesMocks } from '../../../../shared/mocks/courses';
import { CourseProps } from '../../../../shared/models/course';

@Component({
  selector: 'vc-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {

  constructor() { }

  courses: CourseProps[] = [];

  ngOnInit(): void {
    this.courses = coursesMocks;
  }

  loadMore(): void {
    console.log('load more')
  }

  onDeleteCourse(id: string): void {
    console.log('delete: ', id);
  }

  onEditCourse(id: string): void {
    console.log('edit: ', id);
  }
}
