import { Component, Input } from '@angular/core';
import { Sign } from '../../models/sign';
import { SignSizeComponent } from '../sign-size/sign-size.component';
import { SignTypeComponent } from '../sign-type/sign-type.component';
import { IdentificationComponent } from '../identification/identification.component';
import { InputNumber } from 'primeng/inputnumber';
import { FormsModule } from '@angular/forms';
import { SignArrowComponent } from '../sign-arrow/sign-arrow.component';
import { Divider } from 'primeng/divider';
import { SignArrowGroupComponent } from '../sign-arrow-group/sign-arrow-group.component';
import { SignPartComponent } from '../sign-part/sign-part.component';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-sign-configure-menu',
  templateUrl: './sign-configure-menu.component.html',
  styleUrl: './sign-configure-menu.component.scss',
  imports: [SignSizeComponent, SignTypeComponent, IdentificationComponent, InputNumber, FormsModule, SignArrowComponent, Divider, SignArrowGroupComponent, SignPartComponent, ButtonModule]
})
export class SignConfigureMenuComponent {
  @Input({ required: true })
  public sign!: Sign;

  public collapsed: boolean = false;
}
