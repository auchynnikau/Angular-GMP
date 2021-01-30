import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectIsAuthenticated } from 'src/app/store/selectors/auth.selectors';
import { AppState } from './store/app.states';

@Component({
  selector: 'vc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private store: Store<AppState>) {}

  public isAuthenticated$: Observable<boolean> = this.store.select(selectIsAuthenticated);
}
