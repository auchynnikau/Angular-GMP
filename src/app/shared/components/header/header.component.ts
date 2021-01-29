import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { GetUserInfo, LogOut } from 'src/app/store/actions/auth.actions';
import { AppState, selectAuthState } from 'src/app/store/app.states';

@Component({
  selector: 'vc-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [AuthService],
})
export class HeaderComponent implements OnInit {
  constructor(private authService: AuthService, private store: Store<AppState>) {
    this.getState$ = this.store.select(selectAuthState);
  }

  private _userName: string;
  private getState$: Observable<any>;

  ngOnInit() {
    this.getState$.subscribe(({ user }) => {
      if (this.isAuthenticated && !user) {
        this.store.dispatch(new GetUserInfo());
        const { first, last } = user.name;
        this._userName = `${first} ${last}`;
      }
    });
  }

  get userName(): string {
    return this._userName;
  }

  get isAuthenticated(): boolean {
    return this.authService.isAuthenticated;
  }

  logout(): void {
    this.store.dispatch(new LogOut());
  }
}
