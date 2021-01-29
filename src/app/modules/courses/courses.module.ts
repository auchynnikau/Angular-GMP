import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoursesService } from 'src/app/modules/courses/services/courses.service';
import { CoursesComponent } from './pages/courses/courses.component';
import { CoursesListComponent } from './components/courses-list/courses-list.component';
import { CourseItemComponent } from './components/course-item/course-item.component';
import { CoursesControlsComponent } from './components/courses-controls/courses-controls.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../../shared/shared.module';
import { CourseHighlightDirective } from '../../shared/directives/course-highlight.directive';
import { CourseFormComponent } from './pages/course-form/course-form.component';
import { CoursesRoutingModule } from './courses-routing.module';

@NgModule({
  imports: [
    CoursesRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    FormsModule,
    MaterialModule,
    CommonModule,
  ],
  declarations: [
    CoursesComponent,
    CoursesListComponent,
    CourseItemComponent,
    CoursesControlsComponent,
    SearchBarComponent,
    CourseHighlightDirective,
    CourseFormComponent,
  ],
  providers: [CourseHighlightDirective, CoursesService],
})
export class CoursesModule {}
