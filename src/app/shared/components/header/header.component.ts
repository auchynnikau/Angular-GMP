import { Component, OnInit } from '@angular/core';
import { AuthService, UserInfo } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'vc-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [AuthService],
})
export class HeaderComponent implements OnInit {
  constructor(private authService: AuthService) {}

  userName: string;

  ngOnInit() {
    this.getUserName();
  }

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
