import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import {MainLayoutComponent} from './core/main-layout.component';
import {EmptyLayoutComponent} from './core/empty-layout.component';
import {AuthGuard} from './auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'things',
        pathMatch: 'full'
      },
      {
        path: 'things',
        canActivate: [AuthGuard],
        loadChildren: () => import('./pages/things/things.module').then(m => m.ThingsModule)
      }
    ]
  },
  {
    path: '',
    component: EmptyLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'auth',
        pathMatch: 'full'
      },
      {
        path: 'auth',
        loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
      }
    ]
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
