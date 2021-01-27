import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { LoaderState } from 'src/app/shared/models/loader';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  private loaderSubject = new Subject<LoaderState>();
  loaderState = this.loaderSubject.asObservable();

  show() {
    this.loaderSubject.next(<LoaderState>{ isShown: true });
  }

  hide() {
    this.loaderSubject.next(<LoaderState>{ isShown: false });
  }
}
