import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'vc-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [AuthService],
})
export class HeaderComponent {
  constructor(private authService: AuthService) {}

  isAuthenticated: boolean = this.authService.checkIsAuthenticated();

  logout() {
    this.authService.logout();
    console.log('Logout ...');
  }
}
