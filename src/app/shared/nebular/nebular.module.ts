import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NbButtonModule, NbCardModule, NbDialogModule, NbInputModule, NbLayoutModule, NbListModule} from '@nebular/theme';
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
  ]
})
export class NebularModule { }
