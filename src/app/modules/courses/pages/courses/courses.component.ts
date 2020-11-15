import { Component } from '@angular/core';

@Component({
  selector: 'vc-courses',
  templateUrl: './courses.component.html',
})
export class CoursesComponent {
  searchQuery: string;

  handleSearch(searchValue: string): void {
    this.searchQuery = searchValue;
  }
}
