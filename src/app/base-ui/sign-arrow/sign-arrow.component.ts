import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { SignArrow, signArrows, SignSize, signSizes } from '../../models/sign';

@Component({
  selector: 'app-sign-arrow',
  templateUrl: './sign-arrow.component.html',
  styleUrl: './sign-arrow.component.scss'
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
    this.arrowControl = new FormControl<SignArrow>(this.arrow ?? 'BAS', [Validators.required])
  }

  public updateArrow() {
    this.arrowChanged.next(this.arrowControl.value!)
  }
}
