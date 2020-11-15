import { Component, OnInit, OnChanges } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'vc-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [AuthService],
})
export class HeaderComponent implements OnInit, OnChanges {
  constructor(private authService: AuthService) {}

  isAuthenticated = false;

  ngOnInit() {
    this.checkIsAuthenticated();
  }

  ngOnChanges() {
    this.checkIsAuthenticated();
  }

  checkIsAuthenticated() {
    this.isAuthenticated = this.authService.checkIsAuthenticated();
  }

  logout() {
    this.authService.logout();
  }
}
