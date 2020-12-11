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

  @Output() editCourse = new EventEmitter<string>();

  handleDeleteCourse(id: string): void {
    this.deleteCourse.emit(id);
  }

  handleEditCourse(id: string): void {
    this.editCourse.emit(id);
  }
}
