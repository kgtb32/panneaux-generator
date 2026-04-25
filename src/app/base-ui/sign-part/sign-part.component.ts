import { Component, Input } from '@angular/core';
import { identificationModes, Sign } from '../../models/sign';
import { Tabs, TabList, Tab, TabPanels, TabPanel } from 'primeng/tabs';
import { Ripple } from 'primeng/ripple';
import { Button } from 'primeng/button';
import { Panel } from 'primeng/panel';
import { IdentificationComponent } from '../identification/identification.component';
import { SelectButton } from 'primeng/selectbutton';
import { FormsModule } from '@angular/forms';
import { SignArrowGroupComponent } from '../sign-arrow-group/sign-arrow-group.component';
import { SignDirectionComponent } from '../sign-direction/sign-direction.component';

@Component({
    selector: 'app-sign-part',
    templateUrl: './sign-part.component.html',
    styleUrl: './sign-part.component.scss',
    imports: [Tabs, TabList, Ripple, Tab, Button, TabPanels, TabPanel, Panel, IdentificationComponent, SelectButton, FormsModule, SignArrowGroupComponent, SignDirectionComponent]
})
export class SignPartComponent {

  @Input({ required: true })
  sign!: Sign

  public readonly identificationPositionOptions = identificationModes.map((val) => ({ value: val, label: val }))

  public addSignPart() {
    this.sign.parts.push({
      identification: [],
      direction: [],
      identificationPosition: 'COTE',
      rightArrow: false,
      leftArrow: false
    })
  }

  deleteSignPart(i: number) {
    this.sign.parts.splice(i, 1)
  }
}
