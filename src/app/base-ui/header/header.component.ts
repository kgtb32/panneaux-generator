import { Component, EventEmitter, Output } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { baseMenu } from './menus/base-menu';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Output()
  headerMenuItemClicked: EventEmitter<string> = new EventEmitter()

  items: MenuItem[] = baseMenu(this.headerMenuItemClicked)
}
