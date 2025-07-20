import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseSignComponent } from './base-sign/base-sign.component';



@NgModule({
  declarations: [
    BaseSignComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BaseSignComponent
  ]
})
export class CommonSignModule { }
