import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BaseSignComponent } from './base-sign/base-sign.component';
import { RoadIdentificationComponent } from './road-identification/road-identification.component';



@NgModule({
  declarations: [
    BaseSignComponent,
    RoadIdentificationComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BaseSignComponent,
    RoadIdentificationComponent
  ]
})
export class CommonSignModule { }
