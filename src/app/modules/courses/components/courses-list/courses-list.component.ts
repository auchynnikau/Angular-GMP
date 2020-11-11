import { Component, OnChanges, Input } from '@angular/core';
import { CourseProps } from '../../../../shared/models/course';
import { FilterPipe } from '../../../../shared/pipes/filter.pipe';
import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'vc-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
  providers: [FilterPipe, CoursesService],
})
export class CoursesListComponent implements OnChanges {
  constructor(
    private coursesService: CoursesService,
    private filter: FilterPipe
  ) {}

  courses: CourseProps[] = [];

  @Input() searchQuery: string;

  ngOnChanges(): void {
    this.getCoursesList();
  }

  loadMore(): void {
    console.log('load more');
  }

  deleteCourse(id: string): void {
    if (confirm('Are you sure to delete this course?')) {
      this.coursesService.deleteCourse(id);
      this.getCoursesList();
    }
  }

  editCourse(id: string): void {
    console.log('edit: ', id);
  }

  getCoursesList(): void {
    const courses = this.coursesService.getCoursesList();
    this.courses = this.filter.transform(courses, this.searchQuery);
  }
}
