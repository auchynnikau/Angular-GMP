import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { distinctUntilChanged, filter, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState, selectCoursesState } from 'src/app/store/app.states';
import { LoadCourse } from 'src/app/store/actions/courses.actions';
import { Breadcrumbs } from './breadcrumbs';

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
    this.getState$ = this.store.select(selectCoursesState);
    this.breadcrumbs = this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      distinctUntilChanged(),
      map(() => this.buildBreadCrumb(this.activatedRoute.root)),
    );
  }

  private DEFAULT_BREADCRUMB = 'Courses';
  private getState$: Observable<any>;
  public breadcrumbs: Observable<Breadcrumbs[]>;

  getBreadCrumbLabel(route: ActivatedRoute): string {
    if (route.routeConfig) {
      if (route.snapshot.params.id) {
        const id = route.snapshot.paramMap.get('id');
        this.store.dispatch(new LoadCourse(id));
        this.getState$.subscribe((state) => {
          return state.courses[0].name;
        });
      }

      return route.routeConfig.data.breadcrumb;
    }

    return this.DEFAULT_BREADCRUMB;
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
