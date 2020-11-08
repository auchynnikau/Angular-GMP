import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'vc-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent {
  searchBarValue: string;

  @Output() searchQuery = new EventEmitter<string>();

  handleSearch(): void {
    this.searchQuery.emit(this.searchBarValue);
  }
}
