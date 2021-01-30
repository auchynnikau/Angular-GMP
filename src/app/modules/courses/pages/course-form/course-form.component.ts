import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseProps } from 'src/app/shared/models/course';
import { courseTemplate } from 'src/app/shared/mocks/courses';
import { AppState, selectCourse } from 'src/app/store/app.states';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LoadCourse, UpdateCourse, CreateCourse } from 'src/app/store/actions/courses.actions';

@Component({
  selector: 'vc-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss'],
})
export class CourseFormComponent implements OnInit, OnDestroy {
  constructor(private route: ActivatedRoute, private store: Store<AppState>) {}

  public course: CourseProps = { ...courseTemplate };
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
