import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'vc-courses-controls',
  templateUrl: './courses-controls.component.html',
  styleUrls: ['./courses-controls.component.scss'],
})
export class CoursesControlsComponent {
  @Output() searchQuery = new EventEmitter<string>();

  handleSearch(searchBarValue: string): void {
    this.searchQuery.emit(searchBarValue);
  }
}
