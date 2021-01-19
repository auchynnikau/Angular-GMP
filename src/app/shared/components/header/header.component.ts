import { Component } from '@angular/core';
import { AuthService, UserInfo } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'vc-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [AuthService],
})
export class HeaderComponent {
  constructor(private authService: AuthService, private router: Router) {
    router.events.subscribe(() => {
      if (this.isAuthenticated) {
        this.getUserName();
      }
    });
  }

  userName: string;

  getUserName() {
    this.authService.getUserInfo().subscribe((data: UserInfo) => {
      const {
        name: { first, last },
      } = data;

      this.userName = `${first} ${last}`;
    });
  }

  get isAuthenticated() {
    return this.authService.isAuthenticated;
  }

  logout() {
    this.authService.logout();
  }
}
