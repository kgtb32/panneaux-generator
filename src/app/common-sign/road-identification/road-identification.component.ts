import { Component, Input, OnChanges } from '@angular/core';
import { RoadIdentification } from '../../models/sign';

@Component({
  selector: 'app-road-identification',
  templateUrl: './road-identification.component.html',
  styleUrl: './road-identification.component.scss'
})
export class RoadIdentificationComponent implements OnChanges {
  public classes: string[] = []

  @Input({ required: true })
  roadIdentification!: RoadIdentification

  ngOnChanges(): void {
    this.classes = [`sign-type-${this.roadIdentification.type.toLowerCase()}`]
  }
}
