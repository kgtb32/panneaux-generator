import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoadSignComponent } from './road-sign/road-sign.component';
import { CommonSignModule } from '../common-sign/common-sign.module';
import { RoadSignPartComponent } from './road-sign-part/road-sign-part.component';
import { DividerModule } from 'primeng/divider'


@NgModule({
    imports: [
        CommonModule,
        CommonSignModule,
        DividerModule,
        RoadSignComponent,
        RoadSignPartComponent
    ],
    exports: [
        RoadSignComponent,
    ]
})
export class RoadSignModule { }
