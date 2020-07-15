import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import {MainLayoutComponent} from './core/main-layout.component';
import {EmptyLayoutComponent} from './core/empty-layout.component';

const routes: Routes = [
  {
    path: '',
    component: EmptyLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'auth/login',
        pathMatch: 'full'
      },
      {
        path: 'auth',
        loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
      }
    ]
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'things/list',
        pathMatch: 'full'
      },
      {
        path: 'things',
        loadChildren: () => import('./pages/things/things.module').then(m => m.ThingsModule)
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
