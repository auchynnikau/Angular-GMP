import { Component, OnInit, Input } from '@angular/core';
import { coursesMocks } from '../../../../shared/mocks/courses';
import { CourseProps } from '../../../../shared/models/course';
import { FilterPipe } from '../../../../shared/pipes/filter.pipe';

@Component({
  selector: 'vc-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
  providers: [FilterPipe],
})
export class CoursesListComponent implements OnInit {
  constructor(private filter: FilterPipe) {}

  courses: CourseProps[] = [];

  @Input() searchQuery: string;

  ngOnInit(): void {
    this.courses = this.filter.transform(coursesMocks, this.searchQuery);
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
