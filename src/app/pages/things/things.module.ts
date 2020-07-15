import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThingsListComponent } from './things-list/things-list.component';
import {NebularModule} from '../../shared/nebular/nebular.module';
import { NewThingComponent } from './new-thing/new-thing.component';
import {ReactiveFormsModule} from '@angular/forms';
import {Route, RouterModule} from '@angular/router';
import {SharedModule} from '../../shared/shared.module';

const thingsRoutes: Route[] = [
  {
    path: 'list',
    component: ThingsListComponent
  }
];

@NgModule({
  declarations: [
    ThingsListComponent,
    NewThingComponent
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
