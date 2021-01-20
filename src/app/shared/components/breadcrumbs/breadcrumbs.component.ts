import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { distinctUntilChanged, filter, map } from 'rxjs/operators';
import { CoursesService } from 'src/app/modules/courses/services/courses.service';
import { CourseProps } from 'src/app/shared/models/course';
import { Breadcrumbs } from './breadcrumbs';

const DEFAULT_BREADCRUMB = 'Courses';

@Component({
  selector: 'vc-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
  providers: [CoursesService],
})
export class BreadcrumbsComponent {
  breadcrumbs = this.router.events.pipe(
    filter((event) => event instanceof NavigationEnd),
    distinctUntilChanged(),
    map(() => this.buildBreadCrumb(this.activatedRoute.root)),
  );

  constructor(
    private activatedRoute: ActivatedRoute,
    private coursesService: CoursesService,
    private router: Router,
  ) {}

  getBreadCrumbLabel(route: ActivatedRoute) {
    if (route.routeConfig) {
      if (route.snapshot.params.id) {
        this.coursesService
          .getCoursesItem(route.snapshot.params.id)
          .subscribe((data: CourseProps): string => {
            return data.name;
          });
      }

      return route.routeConfig.data.breadcrumb;
    }

    return DEFAULT_BREADCRUMB;
  }

  buildBreadCrumb(
    route: ActivatedRoute,
    url: string = '',
    breadcrumbs: Array<Breadcrumbs> = [],
  ): Array<Breadcrumbs> {
    const label = this.getBreadCrumbLabel(route);
    const path = route.routeConfig ? route.routeConfig.path : '';
    const nextUrl = `${url}${path}/`;
    const breadcrumb = { url: nextUrl, label };
    const newBreadcrumbs = label !== null ? [...breadcrumbs, breadcrumb] : breadcrumbs;

    if (route.firstChild) {
      return this.buildBreadCrumb(route.firstChild, nextUrl, newBreadcrumbs);
    }

    return newBreadcrumbs;
  }
}
