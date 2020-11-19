export interface UserProps {
  id: string;
  firstName: string;
  lastName: string;
  userName: string;
  password: string;
  email: string;
}

export class User implements UserProps {
  id: string;

  firstName: string;

  lastName: string;

  userName: string;

  password: string;

  email: string;
}
