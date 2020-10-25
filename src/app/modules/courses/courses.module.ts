import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CoursesComponent } from './pages/courses/courses.component';
import { CoursesListComponent } from './components/courses-list/courses-list.component';
import { CourseItemComponent } from './components/course-item/course-item.component';
import { CoursesControlsComponent } from './components/courses-controls/courses-controls.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [BrowserModule, SharedModule, FormsModule],
  declarations: [
    CoursesComponent,
    CoursesListComponent,
    CourseItemComponent,
    CoursesControlsComponent,
    SearchBarComponent,
    AddCourseComponent,
  ],
  exports: [CoursesComponent]
})
export class CoursesModule { }
