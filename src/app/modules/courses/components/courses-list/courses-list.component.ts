import { Component, OnChanges, OnInit } from '@angular/core';
import { ConfirmComponent } from 'src/app/shared/components/confirm/confirm.component';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CourseProps } from '../../../../shared/models/course';
import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'vc-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
  providers: [CoursesService],
})
export class CoursesListComponent implements OnInit, OnChanges {
  constructor(
    private coursesService: CoursesService,
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private router: Router,
  ) {
    this.setQueryParams({ count: 5, sort: true });
  }

  courses: Observable<CourseProps[]>;

  ngOnInit(): void {
    this.courses = this.coursesService.courses;
    this.route.queryParams.subscribe(() => {
      this.coursesService.getCoursesList();
    });
  }

  ngOnChanges(): void {
    this.courses = this.coursesService.courses;
    this.coursesService.getCoursesList();
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
    this.coursesService.deleteCourse(id);
    this.coursesService.getCoursesList();
  }
}
