import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignArrow, signArrows, SignSize, signSizes } from '../../models/sign';
import { Select } from 'primeng/select';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-sign-arrow',
    templateUrl: './sign-arrow.component.html',
    styleUrl: './sign-arrow.component.scss',
    imports: [Select, FormsModule, ReactiveFormsModule, NgClass]
})
export class SignArrowComponent {
  @Input()
  showLabel: boolean = true;

  @Input({ required: true })
  arrow?: SignArrow;

  @Output()
  arrowChanged = new EventEmitter<SignArrow>();

  private readonly arrowsIconCorrespondance: { [key: string]: string } = {
    'HAUT': 'pi pi-arrow-up',
    'BAS': 'pi pi-arrow-down',
    'GAUCHE': 'pi pi-arrow-left',
    'DROITE': 'pi pi-arrow-right',
    'HAUT_GAUCHE': 'pi pi-arrow-up-left',
    'HAUT_DROITE': 'pi pi-arrow-up-right',
    'BAS_GAUCHE': 'pi pi-arrow-down-left',
    'BAS_DROITE': 'pi pi-arrow-down-right'
  }

  public arrowControl!: FormControl<SignArrow | null>;

  public readonly options = signArrows.map(arrow => ({ label: '', value: arrow, icon: this.arrowsIconCorrespondance[arrow] }))

  public ngOnInit(): void {
    this.arrowControl = new FormControl<SignArrow>(this.arrow!, [Validators.required])
  }

  public updateArrow() {
    this.arrowChanged.next(this.arrowControl.value!)
  }
}
