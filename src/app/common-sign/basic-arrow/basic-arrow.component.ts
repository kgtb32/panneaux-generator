import { Component, Input } from '@angular/core';
import { SignArrow } from '../../models/sign';

@Component({
    selector: 'app-basic-arrow',
    templateUrl: './basic-arrow.component.html',
    styleUrl: './basic-arrow.component.scss',
    standalone: false
})
export class BasicArrowComponent {
  @Input({ required: true })
  arrow?: SignArrow
}
