import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from './modules/login/login.module';
import { CoursesModule } from './modules/courses/courses.module';
import { MaterialModule } from './modules/material/material.module';

@NgModule({
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    CoursesModule,
    BrowserModule,
    SharedModule,
    LoginModule,
  ],
})
export class AppModule {}
