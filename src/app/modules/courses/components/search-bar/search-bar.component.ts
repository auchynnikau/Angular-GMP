import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'vc-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent {
  constructor(private route: ActivatedRoute, private router: Router) {}

  searchValue: string;

  handleSearch(): void {
    this.router.navigate([], {
      queryParamsHandling: 'merge',
      relativeTo: this.route,
      queryParams: {
        textFragment: this.searchValue,
      },
    });
  }
}
