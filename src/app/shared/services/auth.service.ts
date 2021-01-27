import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserInfo } from 'src/app/shared/models/user';
import urljoin from 'url-join';

export interface Token {
  token: string;
}

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  private LOGIN_URL = '/auth/login';
  private USER_INFO_URL = '/auth/userinfo';

  get isAuthenticated(): boolean {
    return Boolean(this.token);
  }

  get token(): string {
    return localStorage.getItem('token');
  }

  public login(login: string, password: string): Observable<Token> {
    const url = urljoin(environment.apiUrl, this.LOGIN_URL);
    return this.http.post<Token>(url, { login, password });
  }

  public logout(): void {
    localStorage.removeItem('token');
  }

  public getUserInfo(): Observable<UserInfo> {
    const url = urljoin(environment.apiUrl, this.USER_INFO_URL);
    return this.http.post<UserInfo>(url, { token: this.token });
  }
}
