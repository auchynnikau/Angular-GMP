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

  course: CourseProps = courseTemplate;

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    if (this.isEditMode) {
      this.coursesService.getCoursesItem(id).subscribe((data: CourseProps): void => {
        this.course = data !== undefined ? { ...data } : courseTemplate;
      });
    }
  }

  get isEditMode() {
    const id = this.route.snapshot.paramMap.get('id');
    return !!Number(id);
  }

  save(): void {
    if (this.isEditMode) {
      this.coursesService.updateCourse(this.course);
    } else {
      this.coursesService.createCourse(this.course);
    }
  }

  addChips(event): void {
    console.log(event);
  }

  removeChips(): void {
    console.log('remove chips');
  }
}
