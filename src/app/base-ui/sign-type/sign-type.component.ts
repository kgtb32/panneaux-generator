import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignType, signTypes } from '../../models/sign';
import { Select } from 'primeng/select';

@Component({
    selector: 'app-sign-type',
    templateUrl: './sign-type.component.html',
    styleUrl: './sign-type.component.scss',
    imports: [Select, FormsModule, ReactiveFormsModule]
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
