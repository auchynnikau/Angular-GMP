export interface CourseProps {
  id: string;
  name: string;
  date: Date;
  length: number;
  description: string;
  isTopRated: boolean;
  authors: {
    id: number;
    name: string;
  };
}
