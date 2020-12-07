import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoursesService } from 'src/app/modules/courses/services/courses.service';
import { CourseProps } from 'src/app/shared/models/course';

@Component({
  selector: 'vc-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss'],
  providers: [CoursesService],
})
export class CourseFormComponent implements OnInit {
  constructor(private coursesService: CoursesService, private route: ActivatedRoute) {}

  course: CourseProps = {
    id: '',
    title: '',
    duration: undefined,
    creationDate: undefined,
    isTopRated: false,
    description: '',
  };

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.course = this.coursesService.getCoursesItem(id);
  }

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
