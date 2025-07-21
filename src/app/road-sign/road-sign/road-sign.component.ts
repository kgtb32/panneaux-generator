import { Component, Input } from '@angular/core';
import { Sign } from '../../models/sign';

@Component({
  selector: 'app-road-sign',
  templateUrl: './road-sign.component.html',
  styleUrl: './road-sign.component.scss'
})
export class RoadSignComponent {
  @Input({ required: true })
  public sign!: Sign
}
