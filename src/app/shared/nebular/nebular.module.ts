import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NbAlertModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbDialogModule, NbIconModule,
  NbInputModule,
  NbLayoutModule,
  NbListModule
} from '@nebular/theme';
import {NbEvaIconsModule} from '@nebular/eva-icons';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    NbLayoutModule,
    NbEvaIconsModule,
    NbButtonModule,
    NbCardModule,
    NbInputModule,
    NbDialogModule,
    NbListModule,
    NbAlertModule,
    NbCheckboxModule,
    NbIconModule
  ]
})
export class NebularModule { }
