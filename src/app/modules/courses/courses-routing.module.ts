import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesComponent } from './pages/courses/courses.component';
import { CourseFormComponent } from './pages/course-form/course-form.component';

const routes: Routes = [
  { path: '', component: CoursesComponent },
  { path: ':id', component: CourseFormComponent },
  { path: 'new', component: CourseFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursesRoutingModule {}
