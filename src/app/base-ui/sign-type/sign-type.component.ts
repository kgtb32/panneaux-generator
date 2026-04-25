import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { SignType, signTypes } from '../../models/sign';

@Component({
    selector: 'app-sign-type',
    templateUrl: './sign-type.component.html',
    styleUrl: './sign-type.component.scss',
    standalone: false
})
export class SignTypeComponent {
  @Input({ required: true })
  type!: SignType;

  @Input()
  showLabel: boolean = true;

  @Output()
  signTypeChanged = new EventEmitter<SignType>();

  public signTypeControl!: FormControl<SignType | null>;

  public readonly options = signTypes.map(size => ({ label: size, value: size }))

  public ngOnInit(): void {
    this.signTypeControl = new FormControl<SignType>(this.type, [Validators.required])
  }

  public updateSignType() {
    this.signTypeChanged.next(this.signTypeControl.value!)
  }
}
