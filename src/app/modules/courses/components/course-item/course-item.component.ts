import { Input, Output, EventEmitter, Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { CourseProps } from '../../../../shared/models/course';

@Component({
  selector: 'vc-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss'],
})
export class CourseItemComponent implements OnInit {
  courseHighlight: string;

  moment: any = moment;

  @Input() course: CourseProps;

  @Output() deleteCourse = new EventEmitter<string>();

  @Output() editCourse = new EventEmitter<string>();

  ngOnInit() {
    this.courseHighlight = this.getCourseHighlight(this.course);
  }

  getCourseHighlight({ creationDate }: CourseProps): string {
    const currentDate = new Date();
    const daysAgo = 14;
    const pastDateTermValue = new Date().setDate(creationDate.getDate() - daysAgo);
    const pastDateTerm = new Date(pastDateTermValue);

    if (creationDate < currentDate && creationDate >= pastDateTerm) {
      return 'green';
    }
    if (creationDate > currentDate) {
      return 'blue';
    }

    return '';
  }

  handleDeleteCourse(id: string): void {
    this.deleteCourse.emit(id);
  }

  handleEditCourse(id: string): void {
    this.editCourse.emit(id);
  }
}
