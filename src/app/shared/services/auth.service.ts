import { UserProps } from 'src/app/shared/models/user';
import { userMocks } from 'src/app/shared/mocks/user';

export class AuthService {
  private isAuthenticated: boolean = this.checkIsAuthenticated();

  private user: UserProps = { ...userMocks };

  private token = '123e143245t';

  login(): void {
    const { firstName, lastName } = this.user;
    localStorage.setItem('user', `${firstName} ${lastName}`);
    localStorage.setItem('token', this.token);
  }

  logout(): void {
    localStorage.clear();
  }

  checkIsAuthenticated(): boolean {
    return Boolean(localStorage.getItem('user'));
  }

  getUserInfo(): string {
    if (this.isAuthenticated) {
      return localStorage.getItem('user');
    }

    return '';
  }
}
