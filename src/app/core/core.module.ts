import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout.component';
import {RouterModule} from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import {SharedModule} from '../shared/shared.module';
import {EmptyLayoutComponent} from './empty-layout.component';
import {TranslateModule} from '@ngx-translate/core';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    TranslateModule
  ],
  declarations: [
    EmptyLayoutComponent,
    MainLayoutComponent,
    FooterComponent
  ]
})
export class CoreModule { }
