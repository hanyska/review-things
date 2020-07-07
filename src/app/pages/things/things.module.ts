import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThingsListComponent } from './things-list/things-list.component';



@NgModule({
    declarations: [ThingsListComponent],
    exports: [
        ThingsListComponent
    ],
    imports: [
        CommonModule
    ]
})
export class ThingsModule { }
