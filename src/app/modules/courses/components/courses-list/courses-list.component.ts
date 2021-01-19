import { Component, Input, OnChanges } from '@angular/core';
import { ConfirmComponent } from 'src/app/shared/components/confirm/confirm.component';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { CourseProps } from '../../../../shared/models/course';
import { FilterPipe } from '../../../../shared/pipes/filter.pipe';
import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'vc-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
  providers: [FilterPipe, CoursesService],
})
export class CoursesListComponent implements OnChanges {
  constructor(
    private coursesService: CoursesService,
    private route: ActivatedRoute,
    private filter: FilterPipe,
    private dialog: MatDialog,
  ) {}

  courses: CourseProps[] = [];
  count = 5;

  @Input() searchQuery: string;

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

  loadMore(): void {
    this.count += 5;
    this.getCoursesList(this.count);
  }

  deleteCourse(id: string): void {
    this.coursesService.deleteCourse(id);
    this.getCoursesList();
  }

  getCoursesList(count?: number): void {
    this.coursesService.getCoursesList(count).subscribe((data: CourseProps[]): void => {
      this.courses = this.filter.transform(data, this.searchQuery);
    });
  }
}
