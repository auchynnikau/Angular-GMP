import { Input, Output, EventEmitter, Component } from '@angular/core';
import { CourseProps } from '../../../../shared/models/course';

@Component({
  selector: 'vc-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss']
})
export class CourseItemComponent {
  @Input() course: CourseProps;
  @Output() onDeleteCourse = new EventEmitter<string>();
  @Output() onEditCourse = new EventEmitter<string>();

  handleDeleteCourse(id: string): void {
    this.onDeleteCourse.emit(id);
  }

  handleEditCourse(id: string): void {
    this.onEditCourse.emit(id);
  }
}
