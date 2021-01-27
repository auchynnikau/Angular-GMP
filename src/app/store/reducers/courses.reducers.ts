import { CourseProps } from 'src/app/shared/models/course';

export interface State {
  isLoading: boolean;
  isLoaded: boolean;
  courses: CourseProps[];
  errorMessage: string | null;
}

export const initialState: State = {
  isLoading: false,
  isLoaded: false,
  courses: [],
  errorMessage: null,
};
