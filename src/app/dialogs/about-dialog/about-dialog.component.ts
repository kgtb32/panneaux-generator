import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TableModule } from 'primeng/table';
import packageJson from '../../../../package.json';
import env from '../../env/env';
import { ChangelogService } from '../../services/header/changelog.service';

@Component({
    selector: 'app-about-dialog',
    templateUrl: './about-dialog.component.html',
    styleUrl: './about-dialog.component.scss',
    imports: [AsyncPipe, TableModule]
})
export class AboutDialogComponent {
  private readonly changelogService = inject(ChangelogService);

  public readonly version = packageJson.version;
  public readonly links = env.about;

  public readonly changelogs$ = this.changelogService.getChangelog();
}
