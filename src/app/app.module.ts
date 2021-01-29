import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from './modules/login/login.module';
import { CoursesModule } from './modules/courses/courses.module';
import { MaterialModule } from './modules/material/material.module';
import { LoaderInterceptorService } from './shared/services/loader-interceptor.service';
import { AuthEffects } from './store/effects/auth.effects';
import { CoursesEffects } from './store/effects/courses.effects';
import { reducers } from './store/app.states';

@NgModule({
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  imports: [
    EffectsModule.forRoot([AuthEffects, CoursesEffects]),
    StoreModule.forRoot(reducers, {}),
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    CoursesModule,
    SharedModule,
    LoginModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptorService,
      multi: true,
    },
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
