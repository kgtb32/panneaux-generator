import { Component, Input } from '@angular/core';
import { RoadDirection } from '../../models/sign';
import { TableModule } from 'primeng/table';
import { Button } from 'primeng/button';
import { RoadImportanceComponent } from '../road-importance/road-importance.component';
import { FormsModule } from '@angular/forms';
import { InputText } from 'primeng/inputtext';
import { MultiSelect } from 'primeng/multiselect';

@Component({
    selector: 'app-sign-direction',
    templateUrl: './sign-direction.component.html',
    styleUrl: './sign-direction.component.scss',
    imports: [TableModule, Button, RoadImportanceComponent, FormsModule, InputText, MultiSelect]
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
