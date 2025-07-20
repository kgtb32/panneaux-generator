import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Sign, SignSize, signSizes } from '../../models/sign';
import { FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-sign-size',
  templateUrl: './sign-size.component.html',
  styleUrl: './sign-size.component.scss'
})
export class SignSizeComponent implements OnInit {
  @Input({ required: true })
  sign!: Sign;

  @Output()
  signInfosChanged = new EventEmitter<Sign>();

  public signSizeControl!: FormControl<SignSize | null>;

  public readonly options = signSizes.map(size => ({ label: size, value: size }))

  public ngOnInit(): void {
    this.signSizeControl = new FormControl<SignSize>(this.sign.size, [Validators.required])
  }

  public updateSignSize() {
    this.signInfosChanged.next({
      ...this.sign,
      size: this.signSizeControl.value!
    })
  }
}
