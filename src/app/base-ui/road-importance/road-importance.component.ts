import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { RoadImportance, roadImportances } from '../../models/sign';

@Component({
    selector: 'app-road-importance',
    templateUrl: './road-importance.component.html',
    styleUrl: './road-importance.component.scss',
    standalone: false
})
export class RoadImportanceComponent {
  @Input()
  showLabel: boolean = true;

  @Input({ required: true })
  importance!: RoadImportance

  @Output()
  importanceChanged = new EventEmitter<RoadImportance>();

  public roadImportanceControl!: FormControl<RoadImportance | null>;

  public readonly options = roadImportances.map(size => ({ label: size, value: size }))

  public ngOnInit(): void {
    this.roadImportanceControl = new FormControl<RoadImportance>(this.importance, [Validators.required])
  }

  public updateImportance() {
    this.importanceChanged.next(this.roadImportanceControl.value!)
  }

}
