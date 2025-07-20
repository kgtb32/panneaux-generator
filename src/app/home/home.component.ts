import { Component } from '@angular/core';
import { Sign } from '../models/sign';

@Component({
  selector: 'app-home',
  standalone: false,

  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  public sign: Sign = {
    size: 'M',
    type: 'A'
  }
}
