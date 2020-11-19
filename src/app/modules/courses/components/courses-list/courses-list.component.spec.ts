import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { CoursesListComponent } from './courses-list.component';

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

  it('should have data after Angular calls OnChanges', () => {
    component.ngOnChanges();

    expect(component.courses.length).toBeGreaterThan(0);
  });

  it('should call the loadMore method', () => {
    const loadMoreSpy = spyOn(component, 'loadMore');
    element = fixture.debugElement.query(By.css('button')).nativeElement;
    element.click();
    component.loadMore();

    expect(loadMoreSpy).toHaveBeenCalledTimes(1);
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
    component.ngOnChanges();
    const courseItems = document.getElementsByClassName('courses-list__item');

    expect(courseItems.length).toBe(3);
  });
});
