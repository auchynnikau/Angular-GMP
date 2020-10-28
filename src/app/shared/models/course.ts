export interface CourseProps {
  id: string;
  title: string;
  creationDate: Date;
  duration: string;
  description: string;
}

export class Course implements CourseProps {
  id: string;

  title: string;

  creationDate: Date;

  duration: string;

  description: string;
}
