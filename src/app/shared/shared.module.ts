import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FilterPipe } from './pipes/filter.pipe';
import { OrderByPipe } from './pipes/orderBy.pipe';
import { DurationPipe } from './pipes/duration.pipe';
import { LogoComponent } from './components/logo/logo.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';

const components = [
  BreadcrumbsComponent,
  UserInfoComponent,
  FooterComponent,
  HeaderComponent,
  LogoComponent,
];

const pipes = [DurationPipe, OrderByPipe, FilterPipe];

@NgModule({
  declarations: [...pipes, ...components],
  exports: [...pipes, ...components],
  imports: [BrowserModule, MatButtonModule, MatFormFieldModule],
})
export class SharedModule {}
