import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { distinctUntilChanged, filter, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectCourseName } from 'src/app/store/selectors/courses.selectors';
import { LoadCourse } from 'src/app/store/actions/courses.actions';
import { AppState } from 'src/app/store/app.states';
import { Breadcrumbs } from './breadcrumbs';

const DEFAULT_BREADCRUMB = 'Courses';

@Component({
  selector: 'vc-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
})
export class BreadcrumbsComponent {
  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store<AppState>,
    private router: Router,
  ) {
    this.breadcrumbs = this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      distinctUntilChanged(),
      map(() => this.buildBreadCrumb(this.activatedRoute.root)),
    );
  }

  private courseName$: Observable<string> = this.store.select(selectCourseName);
  public breadcrumbs: Observable<Breadcrumbs[]>;

  getBreadCrumbLabel(route: ActivatedRoute): string {
    if (route.routeConfig) {
      if (route.snapshot.params.id) {
        const id = route.snapshot.paramMap.get('id');
        this.store.dispatch(new LoadCourse(id));
        let breadcrumb: string;
        this.courseName$.subscribe((courseName: string): void => {
          breadcrumb = courseName;
        });

        return breadcrumb;
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
