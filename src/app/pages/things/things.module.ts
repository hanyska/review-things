import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThingsListComponent } from './things-list/things-list.component';
import {NebularModule} from '../../shared/nebular/nebular.module';
import { NewThingComponent } from './new-thing/new-thing.component';
import {ReactiveFormsModule} from '@angular/forms';
import {Route, RouterModule} from '@angular/router';
import {SharedModule} from '../../shared/shared.module';
import { ThingComponent } from './thing/thing.component';
import { NewItemComponent } from './thing/new-item/new-item.component';

const thingsRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: 'list',
    component: ThingsListComponent
  },
  {
    path: 'list/:id',
    component: ThingComponent
  }
];

@NgModule({
  declarations: [
    ThingsListComponent,
    NewThingComponent,
    ThingComponent,
    NewItemComponent
  ],
  exports: [
    ThingsListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    NebularModule,
    ReactiveFormsModule,
    RouterModule.forChild(thingsRoutes)
  ]
})
export class ThingsModule { }
