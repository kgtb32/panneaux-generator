import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Sign, SignType, signTypes } from '../../models/sign';

@Component({
  selector: 'app-sign-type',
  templateUrl: './sign-type.component.html',
  styleUrl: './sign-type.component.scss'
})
export class SignTypeComponent {
  @Input({ required: true })
  sign!: Sign;

  @Output()
  signInfosChanged = new EventEmitter<Sign>();

  public signTypeControl!: FormControl<SignType | null>;

  public readonly options = signTypes.map(size => ({ label: size, value: size }))

  public ngOnInit(): void {
    this.signTypeControl = new FormControl<SignType>(this.sign.type, [Validators.required])
  }

  public updateSignType() {
    this.signInfosChanged.next({
      ...this.sign,
      type: this.signTypeControl.value!
    })
  }
}
