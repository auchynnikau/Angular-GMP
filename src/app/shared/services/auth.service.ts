import { Injectable } from '@angular/core';
import { UserProps } from 'src/app/shared/models/user';
import { userMocks } from 'src/app/shared/mocks/user';

@Injectable()
export class AuthService {
  private user: UserProps = { ...userMocks };

  private token = '123e143245t';

  get isAuthenticated(): boolean {
    return localStorage.getItem('token') === this.token;
  }

  public login(email: string, password: string): void {
    if (email === this.user.email && password === this.user.password) {
      localStorage.setItem('user', this.user.userName);
      localStorage.setItem('token', this.token);
    }
  }

  public logout(): void {
    localStorage.clear();
  }

  public getUserInfo(): string {
    if (this.isAuthenticated) {
      return localStorage.getItem('user');
    }

    return '';
  }
}
