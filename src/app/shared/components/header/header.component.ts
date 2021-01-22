import { Component, OnInit } from '@angular/core';
import { AuthService, UserInfo } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'vc-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [AuthService],
})
export class HeaderComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  private userName: string;

  ngOnInit() {
    this.router.events.subscribe((): void => {
      if (this.isAuthenticated) {
        this.getUserName();
      }
    });
  }

  getUserName(): void {
    this.authService.getUserInfo().subscribe((data: UserInfo): void => {
      const { first, last } = data.name;
      this.userName = `${first} ${last}`;
    });
  }

  get isAuthenticated(): boolean {
    return this.authService.isAuthenticated;
  }

  logout(): void {
    this.authService.logout();
  }
}
