import { Component } from '@angular/core';

@Component({
  selector: 'vc-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss'],
})
export class CourseFormComponent {
  cancel(): void {
    console.log('cancel');
  }

  save(): void {
    console.log('cancel');
  }

  add(event): void {
    console.log(event);
  }

  remove(): void {
    console.log();
  }
}
