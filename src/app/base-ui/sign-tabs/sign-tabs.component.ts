import { Component, inject } from '@angular/core';
import { DEFAULT_SIGN } from '../../consts/default-sign';
import { SignTab } from '../../models/sign-tab';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-sign-tabs',
  templateUrl: './sign-tabs.component.html',
  styleUrls: ['./sign-tabs.component.scss'],
})
export class SignTabsComponent {
  private readonly confirmationService = inject(ConfirmationService);

  public signs: SignTab[] = [
    {
      sign: window.structuredClone(DEFAULT_SIGN),
      state: 'EXPORTED',
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
