import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { BaseUiModule } from '../base-ui/base-ui.module';
import { CommonSignModule } from "../common-sign/common-sign.module";
import { RoadSignModule } from '../road-sign/road-sign.module';



@NgModule({
    imports: [
        CommonModule,
        BaseUiModule,
        RoadSignModule,
        HomeComponent
    ]
})
export class HomeModule { }
