import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Sign } from '../../models/sign';

@Component({
  selector: 'app-sign-configure-menu',
  templateUrl: './sign-configure-menu.component.html',
  styleUrl: './sign-configure-menu.component.scss'
})
export class SignConfigureMenuComponent {
  @Input({ required: true })
  public sign!: Sign;

  @Output()
  public signChanged = new EventEmitter<Sign>();
}
