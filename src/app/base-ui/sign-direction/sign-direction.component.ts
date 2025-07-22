import { Component, Input } from '@angular/core';
import { RoadDirection } from '../../models/sign';

@Component({
  selector: 'app-sign-direction',
  templateUrl: './sign-direction.component.html',
  styleUrl: './sign-direction.component.scss'
})
export class SignDirectionComponent {
  @Input()
  directions!: RoadDirection[];

  deleteDirection(i: number) {
    this.directions.splice(i, 1);
  }

  addDirection() {
    this.directions.push({
      importance: 'S',
      label: ''
    })
  }
}
