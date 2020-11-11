import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'vc-courses',
  templateUrl: './courses.component.html',
  styleUrls: [],
  providers: [AuthService],
})
export class CoursesComponent {
  constructor(private authService: AuthService) {}

  searchQuery: string;
  isAuthenticated: boolean = this.authService.checkIsAuthenticated();

  handleSearch(searchValue: string): void {
    this.searchQuery = searchValue;
  }
}
