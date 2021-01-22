import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { distinctUntilChanged, debounceTime, filter } from 'rxjs/operators';

@Component({
  selector: 'vc-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}

  private subject = new Subject<string>();
  private searchValue: string;

  ngOnInit() {
    this.searchValue = this.queryParams.textFragment;
    this.subject
      .pipe(
        debounceTime(500),
        filter((value: string): boolean => this.filterSearchValue(value)),
        distinctUntilChanged(),
      )
      .subscribe((value: string): void => this.updateQueryParams(value));
  }

  get queryParams() {
    return { ...this.route.snapshot.queryParams };
  }

  onKeyUp(value: string): void {
    this.subject.next(value);
  }

  filterSearchValue(value: string): boolean {
    return value.length > 3 || value.length === 0;
  }

  updateQueryParams(value: string): void {
    const { queryParams } = this;

    if (value) {
      queryParams.textFragment = value;
    } else {
      delete queryParams.textFragment;
    }

    this.router.navigate([], {
      relativeTo: this.route,
      queryParams,
    });
  }
}
