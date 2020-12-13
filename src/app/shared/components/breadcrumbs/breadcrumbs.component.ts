import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { distinctUntilChanged, filter, map } from 'rxjs/operators';
import { Breadcrumbs } from './breadcrumbs';

@Component({
  selector: 'vc-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
})
export class BreadcrumbsComponent {
  breadcrumbs = this.router.events.pipe(
    filter((event) => event instanceof NavigationEnd),
    distinctUntilChanged(),
    map(() => this.buildBreadCrumb(this.activatedRoute.root)),
  );

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  buildBreadCrumb(
    route: ActivatedRoute,
    url: string = '',
    breadcrumbs: Array<Breadcrumbs> = [],
  ): Array<Breadcrumbs> {
    const label = route.routeConfig ? route.routeConfig.data.breadcrumb : 'Courses';
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
