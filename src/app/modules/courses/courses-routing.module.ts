import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesComponent } from './pages/courses/courses.component';
import { CourseFormComponent } from './pages/course-form/course-form.component';

const routes: Routes = [
  {
    path: '',
    data: { breadcrumb: null },
    children: [
      { path: '', data: { breadcrumb: null }, component: CoursesComponent },
      { path: 'new', data: { breadcrumb: 'New Course' }, component: CourseFormComponent },
      { path: ':id', data: { breadcrumb: 'Course Info' }, component: CourseFormComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursesRoutingModule {}
