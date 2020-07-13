import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout.component';
import {RouterModule} from '@angular/router';
import {EmptyLayoutComponent} from './empty-layout.component';
import { FooterComponent } from './footer/footer.component';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  declarations: [
    EmptyLayoutComponent,
    MainLayoutComponent,
    FooterComponent
  ]
})
export class CoreModule { }
