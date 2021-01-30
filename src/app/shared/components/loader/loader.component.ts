import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoaderService } from 'src/app/shared/services/loader.service';
import { Loader } from 'src/app/shared/models/loader';
import { Subscription } from 'rxjs';

@Component({
  selector: 'vc-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent implements OnInit, OnDestroy {
  constructor(private loaderService: LoaderService) {}
  private subscription: Subscription;
  isShown = false;

  ngOnInit() {
    this.subscription = this.loaderService.loaderState.subscribe((state: Loader) => {
      this.isShown = state.isShown;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
