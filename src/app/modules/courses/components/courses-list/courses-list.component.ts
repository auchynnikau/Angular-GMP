import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { ConfirmComponent } from 'src/app/shared/components/confirm/confirm.component';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
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

  courses: CourseProps[] = [];

  @Input() searchQuery: string;

  ngOnInit(): void {
    this.route.queryParams.subscribe(() => this.getCoursesList());
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

  ngOnChanges(): void {
    this.getCoursesList();
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

    this.getCoursesList();
  }

  deleteCourse(id: string): void {
    this.coursesService.deleteCourse(id);
    this.getCoursesList();
  }

  getCoursesList(): void {
    this.coursesService.getCoursesList().subscribe((data: CourseProps[]): void => {
      this.courses = [...data];
    });
  }
}
