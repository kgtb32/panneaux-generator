import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { BaseUiModule } from '../base-ui/base-ui.module';
import { CommonSignModule } from "../common-sign/common-sign.module";



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    BaseUiModule,
    CommonSignModule
  ]
})
export class HomeModule { }
