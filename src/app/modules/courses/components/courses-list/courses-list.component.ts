import { Component, OnInit } from '@angular/core';
import { ConfirmComponent } from 'src/app/shared/components/confirm/confirm.component';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LoadCourses, DeleteCourse } from 'src/app/store/actions/courses.actions';
import { selectCourses } from 'src/app/store/selectors/courses.selectors';
import { AppState } from 'src/app/store/app.states';
import { Course } from 'src/app/shared/models/course';

@Component({
  selector: 'vc-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
})
export class CoursesListComponent implements OnInit {
  constructor(
    private store: Store<AppState>,
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private router: Router,
  ) {}

  public courses$: Observable<Course[]> = this.store.select(selectCourses);

  ngOnInit(): void {
    this.setQueryParams({ count: 5, sort: true });
    this.route.queryParams.subscribe(() => {
      this.store.dispatch(new LoadCourses());
    });
  }

  confirmDeleting(id: string): void {
    const dialogRef = this.dialog.open(ConfirmComponent, {
      data: {
        title: 'Warning!',
        description: 'Are you sure to delete this course?',
      },
    });

    dialogRef.afterClosed().subscribe((confirmed) => {
      if (confirmed) {
        this.deleteCourse(id);
      }
    });
  }

  setQueryParams(queryParams) {
    this.router.navigate([], {
      queryParamsHandling: 'merge',
      relativeTo: this.route,
      queryParams,
    });
  }

  loadMore(): void {
    const { count } = this.route.snapshot.queryParams;

    if (count) {
      const updatedParam = +count + 5;
      this.setQueryParams({ count: updatedParam });
    } else {
      this.setQueryParams({ count: 5 });
    }
  }

  deleteCourse(id: string): void {
    this.store.dispatch(new DeleteCourse(id));
  }
}
