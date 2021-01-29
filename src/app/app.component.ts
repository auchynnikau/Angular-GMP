import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'vc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [AuthService],
})
export class AppComponent implements OnInit {
  constructor(private authService: AuthService) {}

  public isAuthenticated: boolean;

  ngOnInit() {
    this.isAuthenticated = this.authService.isAuthenticated;
  }
}
