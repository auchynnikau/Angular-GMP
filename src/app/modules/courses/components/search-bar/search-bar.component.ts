import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vc-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  constructor() { }

  searchValue: string;

  handleSearch(): void {
    console.log(this.searchValue)
  }

  ngOnInit(): void {
  }

}
