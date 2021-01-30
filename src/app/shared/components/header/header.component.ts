import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LogOut } from 'src/app/store/actions/auth.actions';
import { AppState } from 'src/app/store/app.states';
import { selectUserName } from 'src/app/store/selectors/user.selectors';

@Component({
  selector: 'vc-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [AuthService],
})
export class HeaderComponent {
  constructor(private authService: AuthService, private store: Store<AppState>) {}

  public userName$: Observable<string> = this.store.select(selectUserName);

  get isAuthenticated(): boolean {
    return this.authService.isAuthenticated;
  }

  logout(): void {
    this.store.dispatch(new LogOut());
  }
}
