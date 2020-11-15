import { Component, OnInit, OnChanges } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'vc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [AuthService],
})
export class AppComponent implements OnInit, OnChanges {
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
}
