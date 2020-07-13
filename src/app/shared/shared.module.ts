import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NebularModule} from './nebular/nebular.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    NebularModule
  ]
})
export class SharedModule { }
