import { Input, Output, EventEmitter, Component, ChangeDetectionStrategy } from '@angular/core';
import { CourseProps } from '../../../../shared/models/course';

@Component({
  selector: 'vc-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseItemComponent {
  @Input() course: CourseProps;
  @Output() deleteCourse = new EventEmitter<string>();

  handleDeleteCourse(): void {
    this.deleteCourse.emit(this.course.id);
  }
}
