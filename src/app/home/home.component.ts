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
    bottomArrows: 2,
    leftArrow: false,
    rightArrow: false,
    bottomArrowsType: 'BAS',
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
        identificationPosition: 'HAUT',
        leftArrow: false,
        rightArrow: false,
        direction: [
          {
            importance: 'XL',
            label: "Aéroport du roi vert",
            icon: [],
          },
          {
            importance: 'L',
            label: 'Prison du Roi Vert',
            icon: [],
          },
          {
            importance: 'M',
            label: 'Le Roi Vert - Centre',
            icon: [],
          },
          {
            importance: 'S',
            label: 'Le Roi Rouge',
            icon: [],
          }
        ],
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
        identificationPosition: 'COTE',
        rightArrow: false,
        leftArrow: false,
        direction: [
          {
            importance: 'XL',
            label: 'Arébé',
            icon: []
          }
        ],
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
