import { CourseProps } from 'src/app/shared/models/course';
import { CoursesActionTypes, CoursesActions } from '../actions/courses.actions';

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

export function reducer(state = initialState, action: CoursesActions): State {
  switch (action.type) {
    case CoursesActionTypes.LOAD_COURSES: {
      return {
        ...state,
        isLoaded: false,
        isLoading: true,
        errorMessage: null,
      };
    }
    case CoursesActionTypes.LOAD_COURSES_SUCCESS: {
      return {
        ...state,
        courses: [...action.payload],
        isLoaded: true,
        isLoading: false,
        errorMessage: null,
      };
    }
    case CoursesActionTypes.LOAD_COURSES_FAILURE: {
      return {
        ...state,
        errorMessage: action.payload,
      };
    }
    case CoursesActionTypes.LOAD_COURSE: {
      return {
        ...state,
        isLoaded: false,
        isLoading: true,
        errorMessage: null,
      };
    }
    case CoursesActionTypes.LOAD_COURSE_SUCCESS: {
      return {
        ...state,
        courses: [action.payload],
        isLoaded: true,
        isLoading: false,
        errorMessage: null,
      };
    }
    case CoursesActionTypes.LOAD_COURSE_FAILURE: {
      return {
        ...state,
        errorMessage: action.payload,
      };
    }
    case CoursesActionTypes.CREATE_COURSE: {
      return {
        ...state,
        courses: [action.payload, ...state.courses],
      };
    }
    case CoursesActionTypes.CREATE_COURSE_SUCCESS: {
      return {
        ...state,
        errorMessage: null,
      };
    }
    case CoursesActionTypes.CREATE_COURSE_FAILURE: {
      return {
        ...state,
        errorMessage: action.payload,
      };
    }
    case CoursesActionTypes.UPDATE_COURSE: {
      return {
        ...state,
        courses: [{ ...action.payload }],
      };
    }
    case CoursesActionTypes.UPDATE_COURSE_SUCCESS: {
      return {
        ...state,
        errorMessage: null,
      };
    }
    case CoursesActionTypes.UPDATE_COURSE_FAILURE: {
      return {
        ...state,
        errorMessage: action.payload,
      };
    }
    case CoursesActionTypes.DELETE_COURSE: {
      return { ...state };
    }
    case CoursesActionTypes.DELETE_COURSE_SUCCESS: {
      return {
        ...state,
        errorMessage: null,
      };
    }
    case CoursesActionTypes.DELETE_COURSE_FAILURE: {
      return {
        ...state,
        errorMessage: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}
