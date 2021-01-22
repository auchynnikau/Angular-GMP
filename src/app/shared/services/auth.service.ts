import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import urljoin from 'url-join';

const LOGIN_URL = '/auth/login';
const USER_INFO_URL = '/auth/userinfo';

export interface Token {
  token: string;
}

export interface UserInfo {
  id: number;
  token: string;
  name: {
    first: string;
    last: string;
  };
  login: string;
  password: string;
}

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  get isAuthenticated(): boolean {
    return Boolean(this.token);
  }

  get token(): string {
    return localStorage.getItem('token');
  }

  public login(login: string, password: string): Observable<Object> {
    const url = urljoin(environment.apiUrl, LOGIN_URL);
    return this.http.post<Token>(url, { login, password });
  }

  public logout(): void {
    localStorage.clear();
  }

  public getUserInfo(): Observable<UserInfo> {
    const url = urljoin(environment.apiUrl, USER_INFO_URL);
    return this.http.post<UserInfo>(url, { token: this.token });
  }
}
