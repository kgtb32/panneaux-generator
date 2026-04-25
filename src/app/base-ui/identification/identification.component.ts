import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RoadIdentification } from '../../models/sign';
import { TableModule } from 'primeng/table';
import { Button } from 'primeng/button';
import { SignTypeComponent } from '../sign-type/sign-type.component';
import { FormsModule } from '@angular/forms';
import { InputText } from 'primeng/inputtext';

@Component({
    selector: 'app-identification',
    templateUrl: './identification.component.html',
    styleUrl: './identification.component.scss',
    imports: [TableModule, Button, SignTypeComponent, FormsModule, InputText]
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
