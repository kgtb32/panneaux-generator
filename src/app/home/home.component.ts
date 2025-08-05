import { Component } from '@angular/core';
import { Sign } from '../models/sign';

@Component({
  selector: 'app-home',
  standalone: false,

  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  public zoom: number = 100;

  public sign: Sign = {
    bottomArrows: 0,
    leftArrow: false,
    rightArrow: false,
    bottomArrowsType: 'BAS',
    size: 'S',
    type: 'A',
    identification: [],
    parts: [],
  };
}
