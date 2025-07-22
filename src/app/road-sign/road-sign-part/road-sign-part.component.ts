import { Component, Input } from '@angular/core';
import { SignPart } from '../../models/sign';

@Component({
  selector: 'app-road-sign-part',
  templateUrl: './road-sign-part.component.html',
  styleUrl: './road-sign-part.component.scss'
})
export class RoadSignPartComponent {
  @Input()
  signPart!: SignPart;
}
