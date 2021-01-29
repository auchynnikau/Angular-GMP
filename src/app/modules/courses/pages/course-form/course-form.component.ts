import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseProps } from 'src/app/shared/models/course';
import { courseTemplate } from 'src/app/shared/mocks/courses';
import { AppState, selectCoursesState } from 'src/app/store/app.states';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LoadCourse, UpdateCourse, CreateCourse } from 'src/app/store/actions/courses.actions';

@Component({
  selector: 'vc-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss'],
})
export class CourseFormComponent implements OnInit {
  constructor(private route: ActivatedRoute, private store: Store<AppState>) {
    this.getState$ = this.store.select(selectCoursesState);
  }

  course: CourseProps = { ...courseTemplate };
  private getState$: Observable<any>;

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.store.dispatch(new LoadCourse(id));
      this.getState$.subscribe(({ courses }) => {
        this.course = { ...courses[0] };
      });
    } else {
      this.course = { ...courseTemplate };
    }
  }

  get isEditMode() {
    const id = this.route.snapshot.paramMap.get('id');
    return !!Number(id);
  }

  save(): void {
    if (this.isEditMode) {
      this.store.dispatch(new UpdateCourse(this.course));
    } else {
      this.store.dispatch(new CreateCourse(this.course));
    }
  }

  addChips(event): void {
    console.log(event);
  }

  removeChips(): void {
    console.log('remove chips');
  }
}
