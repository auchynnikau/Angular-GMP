import { ComponentFixture, TestBed } from '@angular/core/testing';
import { coursesMocks } from 'src/app/shared/mocks/courses';

import { CourseItemComponent } from './course-item.component';

describe('CourseItemComponent', () => {
  let component: CourseItemComponent;
  let fixture: ComponentFixture<CourseItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CourseItemComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseItemComponent);
    component = fixture.componentInstance;
    const course = coursesMocks[0];
    component.course = course;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should delete course', () => {
    const course = coursesMocks[0];
    component.course = course;
    component.deleteCourse.subscribe((id: string) => {
      expect(id).toBe(course.id);
    });
    component.handleDeleteCourse(course.id);
  });

  it('should edit course', () => {
    const course = coursesMocks[0];
    component.course = course;
    component.editCourse.subscribe((id: string) => {
      expect(id).toBe(course.id);
    });
    component.handleEditCourse(course.id);
  });
});
