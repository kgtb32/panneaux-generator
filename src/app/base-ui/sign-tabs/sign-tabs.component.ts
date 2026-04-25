import { Component, inject } from '@angular/core';
import { DEFAULT_SIGN } from '../../consts/default-sign';
import { SignTab } from '../../models/sign-tab';
import { ConfirmationService } from 'primeng/api';
import { ConfirmPopup } from 'primeng/confirmpopup';
import { Tabs, TabList, Tab, TabPanels, TabPanel } from 'primeng/tabs';
import { Ripple } from 'primeng/ripple';
import { Button } from 'primeng/button';
import { RoadSignComponent } from '../../road-sign/road-sign/road-sign.component';
import { ZoomComponent } from '../zoom/zoom.component';
import { SignConfigureMenuComponent } from '../sign-configure-menu/sign-configure-menu.component';

@Component({
  selector: 'app-sign-tabs',
  templateUrl: './sign-tabs.component.html',
  styleUrls: ['./sign-tabs.component.scss'],
  imports: [ConfirmPopup, Tabs, TabList, Ripple, Tab, Button, TabPanels, TabPanel, RoadSignComponent, ZoomComponent, SignConfigureMenuComponent]
})
export class SignTabsComponent {
  private readonly confirmationService = inject(ConfirmationService);

  public signs: SignTab[] = [
    {
      sign: window.structuredClone(DEFAULT_SIGN),
      state: 'UNSAVED',
    },
  ];
  public zoom: number = 100;
  public selected: number = 0;

  public add() {
    this.signs.push({
      sign: window.structuredClone(DEFAULT_SIGN),
      state: 'UNSAVED',
    });
    this.selected = this.signs.length - 1
  }

  public askForDelete(i: number, event: Event) {
    this.confirmationService.confirm({
      target: event.target!,
      message: 'Êtes vous sûr de vouloir supprimer ce panneau',
      icon: 'pi pi-exclamation-triangle',
      rejectButtonProps: {
        label: ' Non',
        severity: 'secondary',
        outlined: true,
      },
      acceptButtonProps: {
        label: 'Oui',
        severity: 'danger',
      },
      accept: () => {
        if (this.selected === i) {
          this.selected = 0;
        }
        this.signs.splice(i, 1);
      },
    });
  }
}
