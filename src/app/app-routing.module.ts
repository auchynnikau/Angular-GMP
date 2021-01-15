import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { AuthGuard } from './modules/login/guards/login.guard';

const routes: Routes = [
  {
    path: '',
    data: { breadcrumb: null },
    children: [
      { path: '', redirectTo: 'courses', pathMatch: 'full' },
      {
        path: 'courses',
        data: { breadcrumb: null },
        loadChildren: () => import('./modules/courses/courses.module').then((m) => m.CoursesModule),
        canActivate: [AuthGuard],
      },
      {
        path: 'login',
        data: { breadcrumb: null },
        loadChildren: () => import('./modules/login/login.module').then((m) => m.LoginModule),
      },
      { path: '**', data: { breadcrumb: null }, component: NotFoundComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class AppRoutingModule {}
