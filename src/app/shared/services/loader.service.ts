import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Loader } from 'src/app/shared/models/loader';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  private loaderSubject = new Subject<Loader>();
  loaderState = this.loaderSubject.asObservable();

  show() {
    this.loaderSubject.next(<Loader>{ isShown: true });
  }

  hide() {
    this.loaderSubject.next(<Loader>{ isShown: false });
  }
}
