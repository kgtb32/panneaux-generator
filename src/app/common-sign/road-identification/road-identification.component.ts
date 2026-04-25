import { Component, Input } from '@angular/core';
import { RoadIdentification } from '../../models/sign';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-road-identification',
    templateUrl: './road-identification.component.html',
    styleUrl: './road-identification.component.scss',
    imports: [NgClass]
})
export class RoadIdentificationComponent {
  public get classes(): string[] {
    return [`sign-type-${this.roadIdentification.type.toLowerCase()}`]
  }

  @Input({ required: true })
  roadIdentification!: RoadIdentification
}
