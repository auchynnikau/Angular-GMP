import { Course } from 'src/app/shared/models/course';
import { CoursesActionTypes, CoursesActions } from '../actions/courses.actions';

export interface CoursesState {
  selectedCourse: Course;
  courses: Course[];
  isLoading: boolean;
  isLoaded: boolean;
  errorMessage: string;
}

export const initialState: CoursesState = {
  selectedCourse: null,
  courses: [],
  isLoading: false,
  isLoaded: false,
  errorMessage: null,
};

export function coursesReducer(state = initialState, action: CoursesActions): CoursesState {
  switch (action.type) {
    case CoursesActionTypes.LOAD_COURSES: {
      return {
        ...state,
        isLoaded: false,
        isLoading: true,
        errorMessage: null,
        selectedCourse: null,
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
        selectedCourse: null,
      };
    }
    case CoursesActionTypes.LOAD_COURSE_SUCCESS: {
      return {
        ...state,
        isLoaded: true,
        isLoading: false,
        errorMessage: null,
        selectedCourse: action.payload,
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
