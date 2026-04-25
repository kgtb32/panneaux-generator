import { Component, Input } from '@angular/core';
import { SignPart } from '../../models/sign';
import { BasicArrowComponent } from '../../common-sign/basic-arrow/basic-arrow.component';
import { NgClass } from '@angular/common';
import { RoadIdentificationComponent } from '../../common-sign/road-identification/road-identification.component';

@Component({
    selector: 'app-road-sign-part',
    templateUrl: './road-sign-part.component.html',
    styleUrl: './road-sign-part.component.scss',
    imports: [BasicArrowComponent, NgClass, RoadIdentificationComponent]
})
export class RoadSignPartComponent {
  @Input()
  signPart!: SignPart;
}
