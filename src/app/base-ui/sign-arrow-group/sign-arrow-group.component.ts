import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SignArrow } from '../../models/sign';

@Component({
    selector: 'app-sign-arrow-group',
    templateUrl: './sign-arrow-group.component.html',
    styleUrl: './sign-arrow-group.component.scss',
    standalone: false
})
export class SignArrowGroupComponent {
  @Input({ required: true })
  arrowType!: SignArrow

  @Input({ required: true })
  enable!: boolean;

  @Input({ required: true })
  direction!: string;

  @Output()
  enableChanged = new EventEmitter<boolean>()

  @Output()
  arrowTypeChanged = new EventEmitter<SignArrow>();
}
