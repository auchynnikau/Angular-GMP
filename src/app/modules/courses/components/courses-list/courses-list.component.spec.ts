import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { CoursesListComponent } from './courses-list.component';
import { coursesMocks } from '../../../../shared/mocks/courses';

describe('CoursesListComponent', () => {
  let component: CoursesListComponent;
  let fixture: ComponentFixture<CoursesListComponent>;
  let element: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoursesListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have data after Angular calls ngOnInit', () => {
    component.ngOnInit();

    expect(component.courses.length).toBeGreaterThan(0);
  });

  it('should call the loadMore method', () => {
    spyOn(component, 'loadMore');
    element = fixture.debugElement.query(By.css('button')).nativeElement;
    element.click();

    expect(component.loadMore).toHaveBeenCalledTimes(1);
  });

  it('should log delete message', () => {
    const consoleSpy = spyOn(console, 'log');
    component.deleteCourse('123');

    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });

  it('should log edit message', () => {
    const consoleSpy = spyOn(console, 'log');
    component.editCourse('123');

    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });

  it('should map data', () => {
    component.ngOnInit();
    const courseItems = document.getElementsByClassName('courses-list__item');

    expect(courseItems.length).toBe(3);
  });
});
