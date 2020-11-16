import { UserProps } from 'src/app/shared/models/user';
import { userMocks } from 'src/app/shared/mocks/user';

export class AuthService {
  private user: UserProps = { ...userMocks };

  private token = '123e143245t';

  get isAuthenticated(): boolean {
    return localStorage.getItem('token') === this.token;
  }

  login(email: string, password: string): void {
    if (email === this.user.email && password === this.user.password) {
      localStorage.setItem('user', this.user.userName);
      localStorage.setItem('token', this.token);
    }
  }

  logout(): void {
    localStorage.clear();
  }

  getUserInfo(): string {
    if (this.isAuthenticated) {
      return localStorage.getItem('user');
    }

    return '';
  }
}
