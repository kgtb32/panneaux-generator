import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoadSignComponent } from './road-sign/road-sign.component';
import { CommonSignModule } from '../common-sign/common-sign.module';
import { RoadSignPartComponent } from './road-sign-part/road-sign-part.component';



@NgModule({
  declarations: [
    RoadSignComponent,
    RoadSignPartComponent
  ],
  imports: [
    CommonModule,
    CommonSignModule
  ],
  exports: [
    RoadSignComponent,
  ]
})
export class RoadSignModule { }
