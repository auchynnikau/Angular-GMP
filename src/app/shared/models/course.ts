export interface CourseProps {
  id: string;
  title: string;
  creationDate: Date;
  duration: number;
  description: string;
  isTopRated: boolean;
}

export class Course implements CourseProps {
  id: string;

  title: string;

  creationDate: Date;

  duration: number;

  description: string;

  isTopRated: boolean;
}
