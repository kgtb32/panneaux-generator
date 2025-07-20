import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { Button } from 'primeng/button'
import { Toolbar } from 'primeng/toolbar'
import { Badge } from 'primeng/badge'
import { Menu } from 'primeng/menu'
import { MenubarModule } from 'primeng/menubar';
import { SignConfigureMenuComponent } from './sign-configure-menu/sign-configure-menu.component';
import { SignSizeComponent } from './sign-size/sign-size.component'
import { SelectButtonModule } from 'primeng/selectbutton';
import { ReactiveFormsModule } from '@angular/forms';
import { SignTypeComponent } from './sign-type/sign-type.component';


@NgModule({
  declarations: [
    HeaderComponent,
    SignConfigureMenuComponent,
    SignSizeComponent,
    SignTypeComponent
  ],
  imports: [
    CommonModule,
    Button,
    Toolbar,
    Badge,
    Menu,
    MenubarModule,
    SelectButtonModule,
    ReactiveFormsModule
  ],
  exports: [
    HeaderComponent,
    SignConfigureMenuComponent
  ]
})
export class BaseUiModule { }
