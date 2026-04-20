import { Component, DestroyRef, inject, OnInit, Output } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MenuItem } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { Subject } from 'rxjs';
import { MenuAction } from '../../models/action';
import { AboutAction } from '../../services/header/actions/about.action';
import { baseMenu } from './menus/base-menu';
import { ExportSignAction } from '../../services/header/actions/export-sign.action';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  private readonly dialogService = inject(DialogService);
  private readonly destroyRef = inject(DestroyRef);

  private readonly actions: { [key: string]: MenuAction } = {
    'file.export': new ExportSignAction(),
    'app.about': new AboutAction(this.dialogService),
  };

  @Output()
  headerMenuItemClicked: Subject<string> = new Subject();

  items: MenuItem[] = baseMenu(this.headerMenuItemClicked);

  public ngOnInit(): void {
    this.headerMenuItemClicked
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (action) => this.actions?.[action]?.execute(),
      });
  }
}
