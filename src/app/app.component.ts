import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState, selectAuthState } from 'src/app/store/app.states';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'vc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [AuthService],
})
export class AppComponent implements OnInit {
  constructor(private store: Store<AppState>) {
    this.getState = this.store.select(selectAuthState);
  }

  getState: Observable<any>;
  isAuthenticated: false;

  ngOnInit() {
    this.getState.subscribe((state) => {
      this.isAuthenticated = state.isAuthenticated;
    });
  }
}
