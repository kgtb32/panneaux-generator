import { DialogService } from 'primeng/dynamicdialog';
import { AboutDialogComponent } from '../../../dialogs/about-dialog/about-dialog.component';
import { MenuAction } from '../../../models/action';

export class AboutAction implements MenuAction {
  constructor(private readonly dialogService: DialogService) {}

  public execute() {
    this.dialogService.open(AboutDialogComponent, {
      appendTo: 'body',
      position: 'center',
      header: 'A propos de ...',
      draggable: true,
      modal: true,
      closable: true,
      showHeader: true,
    });
  }
}
