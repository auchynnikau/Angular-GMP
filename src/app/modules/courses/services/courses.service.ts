import { CourseProps } from 'src/app/shared/models/course';
import { coursesMocks } from 'src/app/shared/mocks/courses';

export class CoursesService {
  private courses: CourseProps[] = [...coursesMocks];

  getCoursesList(): CourseProps[] {
    return this.courses;
  }

  getCoursesItem(id: string): CourseProps {
    return this.courses.find(({ id: courseId }) => courseId === id);
  }

  createCourse(course: CourseProps): void {
    this.courses.push(course);
  }

  updateCourse(course: CourseProps): void {
    const courseToUpdate = this.courses.findIndex(({ id }) => id === course.id);
    this.courses[courseToUpdate] = course;
  }

  deleteCourse(id: string): void {
    this.courses = this.courses.filter(({ id: courseId }) => courseId !== id);
  }
}
