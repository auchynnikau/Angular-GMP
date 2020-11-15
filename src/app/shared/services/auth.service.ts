import { UserProps } from 'src/app/shared/models/user';
import { userMocks } from 'src/app/shared/mocks/user';

export class AuthService {
  private isAuthenticated = false;

  private user: UserProps = { ...userMocks };

  private token = '123e143245t';

  login(email: string, password: string): void {
    if (email === this.user.email && password === this.user.password) {
      localStorage.setItem('user', this.user.userName);
      localStorage.setItem('token', this.token);
      this.isAuthenticated = true;
    }
  }

  logout(): void {
    localStorage.clear();
    this.isAuthenticated = false;
  }

  checkIsAuthenticated(): boolean {
    return this.isAuthenticated;
  }

  getUserInfo(): string {
    if (this.isAuthenticated) {
      return localStorage.getItem('user');
    }

    return '';
  }
}
