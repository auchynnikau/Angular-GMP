import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from 'src/app/shared/models/user';
import urljoin from 'url-join';

export interface LoginResponse {
  token: string;
}

@Injectable()
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}

  private LOGIN_URL = '/auth/login';
  private USER_INFO_URL = '/auth/userinfo';

  get isAuthenticated(): boolean {
    return Boolean(this.token);
  }

  get token(): string {
    return localStorage.getItem('token');
  }

  public login(login: string, password: string): Observable<LoginResponse> {
    const url = urljoin(environment.apiUrl, this.LOGIN_URL);
    return this.http.post<LoginResponse>(url, { login, password });
  }

  public logout(): void {
    localStorage.removeItem('token');
  }

  public getUserInfo(): Observable<User> {
    const url = urljoin(environment.apiUrl, this.USER_INFO_URL);
    return this.http.post<User>(url, { token: this.token });
  }

  public saveUserToken(token: string): void {
    localStorage.setItem('token', token);
    this.router.navigateByUrl('/');
  }
}
