import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { AuthGuard } from './modules/login/guards/login.guard';

const routes: Routes = [
  { path: '', data: { breadcrumb: null }, redirectTo: 'courses', pathMatch: 'full' },
  {
    path: 'courses',
    data: { breadcrumb: null },
    loadChildren: './modules/courses/courses.module#CoursesModule',
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    data: { breadcrumb: null },
    loadChildren: './modules/login/login.module#LoginModule',
  },
  { path: '**', data: { breadcrumb: null }, component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class AppRoutingModule {}
