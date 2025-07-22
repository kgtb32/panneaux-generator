import { Component, Input } from '@angular/core';
import { identificationModes, Sign } from '../../models/sign';

@Component({
  selector: 'app-sign-part',
  templateUrl: './sign-part.component.html',
  styleUrl: './sign-part.component.scss'
})
export class SignPartComponent {
  @Input({ required: true })
  sign!: Sign

  public readonly identificationPositionOptions = identificationModes.map((val) => ({ value: val, label: val }))

  public addSignPart() {
    this.sign.parts.push({
      identification: [],
      direction: [],
      identificationPosition: 'COTE',
      rightArrow: false,
      leftArrow: false
    })
  }
}
