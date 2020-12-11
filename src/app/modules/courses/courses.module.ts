import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CoursesComponent } from './pages/courses/courses.component';
import { CoursesListComponent } from './components/courses-list/courses-list.component';
import { CourseItemComponent } from './components/course-item/course-item.component';
import { CoursesControlsComponent } from './components/courses-controls/courses-controls.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../../shared/shared.module';
import { CourseHighlightDirective } from '../../shared/directives/course-highlight.directive';
import { CourseFormComponent } from './pages/course-form/course-form.component';

@NgModule({
  imports: [ReactiveFormsModule, BrowserModule, SharedModule, FormsModule, MaterialModule],
  declarations: [
    CoursesComponent,
    CoursesListComponent,
    CourseItemComponent,
    CoursesControlsComponent,
    SearchBarComponent,
    AddCourseComponent,
    CourseHighlightDirective,
    CourseFormComponent,
  ],
  exports: [CoursesComponent, CourseFormComponent],
  providers: [CourseHighlightDirective],
})
export class CoursesModule {}
