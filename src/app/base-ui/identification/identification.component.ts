import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RoadIdentification } from '../../models/sign';

@Component({
  selector: 'app-identification',
  templateUrl: './identification.component.html',
  styleUrl: './identification.component.scss'
})
export class IdentificationComponent {
  @Input({ required: true })
  public identifications!: RoadIdentification[];

  public addIdentfication() {
    this.identifications.push({
      name: '',
      type: 'A',
      hasToll: false
    })
  }

  public deleteIdentification(i: number) {
    this.identifications.splice(i, 1)
  }
}
