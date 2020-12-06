import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { CoursesListComponent } from './components/courses-list/courses-list.component';

const routes: Routes = [
  { path: 'courses', component: CoursesListComponent },
  { path: 'courses/:id', component: AddCourseComponent },
  { path: 'courses/new', component: AddCourseComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [],
  exports: [RouterModule],
})
export class CoursesRoutingModule {}
