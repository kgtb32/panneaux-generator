import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { Button } from 'primeng/button'
import { Toolbar } from 'primeng/toolbar'
import { Badge } from 'primeng/badge'
import { Menu } from 'primeng/menu'
import { MenubarModule } from 'primeng/menubar'

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    Button,
    Toolbar,
    Badge,
    Menu,
    MenubarModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class BaseUiModule { }
