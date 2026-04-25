import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SignArrow } from '../../models/sign';
import { FormsModule } from '@angular/forms';
import { SignArrowComponent } from '../sign-arrow/sign-arrow.component';

@Component({
    selector: 'app-sign-arrow-group',
    templateUrl: './sign-arrow-group.component.html',
    styleUrl: './sign-arrow-group.component.scss',
    imports: [FormsModule, SignArrowComponent]
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
