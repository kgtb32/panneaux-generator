import { Component, Input } from '@angular/core';
import { RoadDirection } from '../../models/sign';

@Component({
    selector: 'app-sign-direction',
    templateUrl: './sign-direction.component.html',
    styleUrl: './sign-direction.component.scss',
    standalone: false
})
export class SignDirectionComponent {
  @Input()
  directions!: RoadDirection[];

  private readonly icons = 111;

  public readonly options = new Array(this.icons).fill(0).map((_, i) => ({ value: i + 1, label: i + 1 }))

  deleteDirection(i: number) {
    this.directions.splice(i, 1);
  }

  addDirection() {
    this.directions.push({
      importance: 'S',
      label: '',
      icon: [],
    })
  }
}
