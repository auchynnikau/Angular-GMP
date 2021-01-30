import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LoadCourse, UpdateCourse, CreateCourse } from 'src/app/store/actions/courses.actions';
import { selectCourse } from 'src/app/store/selectors/courses.selectors';
import { AppState } from 'src/app/store/app.states';
import { courseTemplate } from 'src/app/shared/mocks/courses';
import { Course } from 'src/app/shared/models/course';

@Component({
  selector: 'vc-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss'],
})
export class CourseFormComponent implements OnInit {
  constructor(private route: ActivatedRoute, private store: Store<AppState>) {}

  public course: Course = { ...courseTemplate };
  private selectCourse$: Observable<any> = this.store.select(selectCourse);

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.store.dispatch(new LoadCourse(id));
      this.selectCourse$.subscribe((course) => {
        this.course = { ...course };
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
