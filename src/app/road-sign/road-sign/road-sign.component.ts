import { Component, Input } from '@angular/core';
import { Sign } from '../../models/sign';
import { NgStyle } from '@angular/common';
import { BaseSignComponent } from '../../common-sign/base-sign/base-sign.component';
import { BasicArrowComponent } from '../../common-sign/basic-arrow/basic-arrow.component';
import { RoadIdentificationComponent } from '../../common-sign/road-identification/road-identification.component';
import { RoadSignPartComponent } from '../road-sign-part/road-sign-part.component';
import { Divider } from 'primeng/divider';

@Component({
    selector: 'app-road-sign',
    templateUrl: './road-sign.component.html',
    styleUrl: './road-sign.component.scss',
    imports: [NgStyle, BaseSignComponent, BasicArrowComponent, RoadIdentificationComponent, RoadSignPartComponent, Divider]
})
export class RoadSignComponent {
  @Input({ required: true })
  public sign!: Sign

  @Input({ required: true })
  public zoom: string = "100%";

  public get arrowsIterator() {
    return new Array(this.sign.bottomArrows).fill(0)
  }
}
