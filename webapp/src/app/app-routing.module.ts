import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./features/dashboard/dashboard.module').then(
        m => m.DashboardModule
      ),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./features/authentication/authentication.module').then(
        m => m.AuthenticationModule
      ),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home',
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
