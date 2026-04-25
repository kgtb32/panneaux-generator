import { Component, Input } from '@angular/core';
import { RoadIdentification } from '../../models/sign';

@Component({
    selector: 'app-road-identification',
    templateUrl: './road-identification.component.html',
    styleUrl: './road-identification.component.scss',
    standalone: false
})
export class RoadIdentificationComponent {
  public get classes(): string[] {
    return [`sign-type-${this.roadIdentification.type.toLowerCase()}`]
  }

  @Input({ required: true })
  roadIdentification!: RoadIdentification
}
