import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'vc-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
})
export class UserInfoComponent {
  @Output() logout = new EventEmitter();

  handleLogout(): void {
    this.logout.emit();
  }
}
