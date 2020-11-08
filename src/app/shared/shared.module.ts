import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LogoComponent } from './components/logo/logo.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { DurationPipe } from './pipes/duration.pipe';

@NgModule({
  declarations: [
    DurationPipe,
    LogoComponent,
    FooterComponent,
    HeaderComponent,
    UserInfoComponent,
    BreadcrumbsComponent,
  ],
  imports: [BrowserModule],
  exports: [
    LogoComponent,
    FooterComponent,
    HeaderComponent,
    UserInfoComponent,
    BreadcrumbsComponent,
  ],
  providers: [DurationPipe],
})
export class SharedModule {}
