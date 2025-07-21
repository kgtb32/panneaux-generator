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
    type: 'A',
    identification: [
      {
        name: 'A-1',
        type: "A",
        hasToll: true,
      },
    ],
    parts: [
      {
        identification: [
          {
            name: 'A-1',
            type: "A",
            hasToll: true,
          },
          {
            name: 'N-1',
            type: "N",
          },
          {
            name: 'IC-2',
            type: "IC",
          },
          {
            name: 'IP-1',
            type: "IP",
          },
          {
            name: 'LRV-1',
            type: "LI",
          }
        ]
      },
      {
        identification: [
          {
            name: 'IP-2',
            type: 'IP'
          }
        ],

      }
    ]
  }

}
