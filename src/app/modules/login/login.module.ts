import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { LoginComponent } from './pages/login/login.component';
import { SharedModule } from '../../shared/shared.module';
import { LoginFormComponent } from './components/login-form/login-form.component';

@NgModule({
  imports: [BrowserModule, SharedModule, FormsModule],
  declarations: [LoginFormComponent],
  exports: [LoginComponent],
  providers: [],
})
export class LoginModule {}
