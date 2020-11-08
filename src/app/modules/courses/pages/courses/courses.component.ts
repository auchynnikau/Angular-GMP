import { Component } from '@angular/core';

@Component({
  selector: 'vc-courses',
  templateUrl: './courses.component.html',
  styleUrls: [],
})
export class CoursesComponent {
  searchQuery: string;

  handleSearch(searchBarValue: string): void {
    this.searchQuery = searchBarValue;
  }
}
