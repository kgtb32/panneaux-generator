import { Component, Input, OnChanges } from '@angular/core';
import { SignSize, SignType } from '../../models/sign';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-base-sign',
    templateUrl: './base-sign.component.html',
    styleUrl: './base-sign.component.scss',
    imports: [NgClass]
})
export class BaseSignComponent implements OnChanges {
  @Input({ required: true }) size: SignSize = 'S';

  @Input({ required: true }) type: SignType = 'A';

  public childClasses: string[] = [];
  public parentClasses: string[] = [];

  public ngOnChanges(): void {
    this.childClasses = [`sign-type-${this.type.toLowerCase()}`];
    this.parentClasses = [
      `sign-type-${this.type.toLowerCase()}-base`,
      `sign-size-${this.size.toLowerCase()}`,
    ];
  }
}
