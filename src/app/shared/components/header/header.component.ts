import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';
import { UserInfo } from 'src/app/shared/models/user';

@Component({
  selector: 'vc-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [AuthService],
})
export class HeaderComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  private _userName: string;

  ngOnInit() {
    this.router.events.subscribe((): void => {
      if (this.isAuthenticated) {
        this.authService.getUserInfo().subscribe((data: UserInfo): void => {
          const { first, last } = data.name;
          this._userName = `${first} ${last}`;
        });
      }
    });
  }

  get userName(): string {
    return this._userName;
  }

  get isAuthenticated(): boolean {
    return this.authService.isAuthenticated;
  }

  logout(): void {
    this.authService.logout();
  }
}
