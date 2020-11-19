import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../../shared/shared.module';
import { MaterialModule } from '../material/material.module';

import { LoginFormComponent } from './components/login-form/login-form.component';

@NgModule({
  imports: [ReactiveFormsModule, MaterialModule, BrowserModule, SharedModule, FormsModule],
  declarations: [LoginFormComponent],
  exports: [LoginFormComponent],
})
export class LoginModule {}
