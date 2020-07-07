import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThingsListComponent } from './things-list/things-list.component';
import {NebularModule} from '../../shared/nebular/nebular.module';
import { NewThingComponent } from './new-thing/new-thing.component';
import {ReactiveFormsModule} from '@angular/forms';


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
    NebularModule,
    ReactiveFormsModule,
  ]
})
export class ThingsModule { }
