import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../modules/material/material.module';
import { DurationPipe } from './pipes/duration.pipe';
import { LogoComponent } from './components/logo/logo.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LoaderComponent } from './components/loader/loader.component';
import { ConfirmComponent } from './components/confirm/confirm.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';

const components = [
  BreadcrumbsComponent,
  NotFoundComponent,
  UserInfoComponent,
  ConfirmComponent,
  FooterComponent,
  HeaderComponent,
  LoaderComponent,
  LogoComponent,
];

const pipes = [DurationPipe];

@NgModule({
  declarations: [...pipes, ...components],
  exports: [...pipes, ...components],
  imports: [CommonModule, MaterialModule, RouterModule],
})
export class SharedModule {}
