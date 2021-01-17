import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoursesService } from 'src/app/modules/courses/services/courses.service';
import { CourseProps } from 'src/app/shared/models/course';
import { courseTemplate } from 'src/app/shared/mocks/courses';

@Component({
  selector: 'vc-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss'],
  providers: [CoursesService],
})
export class CourseFormComponent implements OnInit {
  constructor(private coursesService: CoursesService, private route: ActivatedRoute) {}

  course: CourseProps;

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    const course = this.coursesService.getCoursesItem(id);
    this.course = course !== undefined ? course : courseTemplate;
  }

  cancel(): void {
    console.log('cancel');
  }

  save(): void {
    console.log('save');
  }

  add(event): void {
    console.log(event);
  }

  remove(): void {
    console.log('remove');
  }
}
