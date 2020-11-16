import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'vc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [AuthService],
})
export class AppComponent {
  constructor(private authService: AuthService) {}

  get isAuthenticated() {
    return this.authService.isAuthenticated;
  }
}
