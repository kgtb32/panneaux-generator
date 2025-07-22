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
  size!: SignSize;

  @Input()
  showLabel: boolean = true;

  @Output()
  sizeChanged = new EventEmitter<SignSize>();

  public signSizeControl!: FormControl<SignSize | null>;

  public readonly options = signSizes.map(size => ({ label: size, value: size }))

  public ngOnInit(): void {
    this.signSizeControl = new FormControl<SignSize>(this.size, [Validators.required])
  }

  public updateSignSize() {
    this.sizeChanged.next(this.signSizeControl.value!)
  }
}
