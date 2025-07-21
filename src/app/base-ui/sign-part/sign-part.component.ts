import { Component, Input } from '@angular/core';
import { Sign } from '../../models/sign';

@Component({
  selector: 'app-sign-part',
  templateUrl: './sign-part.component.html',
  styleUrl: './sign-part.component.scss'
})
export class SignPartComponent {
  @Input({ required: true })
  sign!: Sign

  public addSignPart() {
    this.sign.parts.push({
      identification: []
    })
  }
}
