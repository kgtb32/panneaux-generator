import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ConfirmationService } from 'primeng/api';
import { Button } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmPopup } from 'primeng/confirmpopup';
import { Ripple } from 'primeng/ripple';
import { Tab, TabList, TabPanel, TabPanels, Tabs } from 'primeng/tabs';
import { catchError, filter, map, of, switchMap } from 'rxjs';
import { DEFAULT_SIGN } from '../../consts/default-sign';
import {
  SIGN_TAB_DELETE_SIGN_POPUP,
  SIGN_TAB_FILENAME_DIALOG,
} from '../../consts/sign-tab';
import { SignTab } from '../../models/sign-tab';
import { RoadSignComponent } from '../../road-sign/road-sign/road-sign.component';
import { EventsService } from '../../services/events.service';
import { SignService } from '../../services/sign.service';
import { generateUnifiedErrorMessage } from '../../utils/display-error';
import { SignConfigureMenuComponent } from '../sign-configure-menu/sign-configure-menu.component';
import { ZoomComponent } from '../zoom/zoom.component';
import { DialogService } from 'primeng/dynamicdialog';
import { TextInputDialogComponent } from '../../dialogs/text-input-dialog/text-input-dialog.component';

@Component({
  selector: 'app-sign-tabs',
  templateUrl: './sign-tabs.component.html',
  styleUrls: ['./sign-tabs.component.scss'],
  imports: [
    ConfirmPopup,
    Tabs,
    TabList,
    Ripple,
    Tab,
    Button,
    TabPanels,
    TabPanel,
    RoadSignComponent,
    ZoomComponent,
    SignConfigureMenuComponent,
    ConfirmDialogModule,
  ],
})
export class SignTabsComponent implements OnInit {
  private readonly confirmationService = inject(ConfirmationService);
  private readonly dialogService = inject(DialogService);
  private readonly eventsService = inject(EventsService);
  private readonly signService = inject(SignService);
  private readonly destroyRef = inject(DestroyRef);

  public readonly signs: SignTab[] = [
    {
      sign: window.structuredClone(DEFAULT_SIGN),
      state: 'UNSAVED',
    },
  ];
  public zoom: number = 100;
  public selected: number = 0;

  private get currentSign() {
    return this.signs.at(this.selected);
  }

  public ngOnInit(): void {
    this.eventsService.subMenuClicked.subscribe({
      next: () => this.saveCurrentSign(),
    });
  }

  public add() {
    this.signs.push({
      sign: window.structuredClone(DEFAULT_SIGN),
      state: 'UNSAVED',
    });
    this.selected = this.signs.length - 1;
  }

  public askForDelete(i: number, event: Event) {
    this.confirmationService.confirm({
      target: event.target!,
      ...SIGN_TAB_DELETE_SIGN_POPUP,
      accept: () => {
        if (this.selected === i) {
          this.selected = 0;
        }
        this.signs.splice(i, 1);
      },
    });
  }

  private saveCurrentSign() {
    const isAlreadySaved = this.currentSign!.id;
    const filename$ = isAlreadySaved
      ? of(this.currentSign!.name)
      : this.dialogService
        .open(TextInputDialogComponent, SIGN_TAB_FILENAME_DIALOG)
        ?.onClose.pipe(filter((res) => res !== null && res !== undefined));
    filename$?.pipe(
      switchMap((fileName) =>
        this.signService
          .saveSign(this.currentSign?.sign!, fileName, this.currentSign?.id)
          .pipe(
            takeUntilDestroyed(this.destroyRef),
            map((id) => {
              this.currentSign!.id = id;
              this.currentSign!.state = 'SAVED';
              this.currentSign!.name = fileName;
            }),
            catchError((e) => {
              this.confirmationService.confirm(
                generateUnifiedErrorMessage(e, 'dialog'),
              );
              this.currentSign!.state = 'UNSAVED';
              return of(false);
            }),
          ),
      ),
    )
      .subscribe();
  }
}
