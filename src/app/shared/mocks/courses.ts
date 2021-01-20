import { CourseProps } from '../models/course';

export const coursesMocks: CourseProps[] = [
  {
    id: '123123',
    name: 'Course Title',
    length: 90,
    date: new Date(),
    isTopRated: true,
    authors: {
      id: 123,
      name: 'Morales',
    },
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    id: '12234234',
    name: 'Course Title',
    length: 90,
    date: new Date('December 17, 1995 03:24:00'),
    isTopRated: false,
    authors: {
      id: 123,
      name: 'Morales',
    },
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    id: '123123423',
    name: 'Course Title',
    length: 50,
    date: new Date('December 17, 2025 03:24:00'),
    isTopRated: false,
    authors: {
      id: 123,
      name: 'Morales',
    },
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
];

export const courseTemplate: CourseProps = {
  id: '',
  name: '',
  length: undefined,
  date: undefined,
  isTopRated: false,
  description: '',
  authors: {
    id: 123,
    name: 'Morales',
  },
};
