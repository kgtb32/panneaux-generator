import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { Button, ButtonModule } from 'primeng/button'
import { Toolbar } from 'primeng/toolbar'
import { Badge } from 'primeng/badge'
import { Menu } from 'primeng/menu'
import { MenubarModule } from 'primeng/menubar';
import { SignConfigureMenuComponent } from './sign-configure-menu/sign-configure-menu.component';
import { SignSizeComponent } from './sign-size/sign-size.component'
import { SelectButtonModule } from 'primeng/selectbutton';
import { PanelModule } from 'primeng/panel'
import { TabsModule } from 'primeng/tabs'
import { TableModule } from 'primeng/table'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignTypeComponent } from './sign-type/sign-type.component';
import { SignPartComponent } from './sign-part/sign-part.component';
import { Select, SelectModule } from "primeng/select";
import { InputTextModule } from 'primeng/inputtext';
import { Checkbox } from "primeng/checkbox";
import { IdentificationComponent } from './identification/identification.component';


@NgModule({
  declarations: [
    HeaderComponent,
    SignConfigureMenuComponent,
    SignSizeComponent,
    SignTypeComponent,
    SignPartComponent,
    IdentificationComponent
  ],
  imports: [
    CommonModule,
    Button,
    Toolbar,
    TabsModule,
    ButtonModule,
    PanelModule,
    TableModule,
    Badge,
    Menu,
    MenubarModule,
    SelectButtonModule,
    SelectModule,
    InputTextModule,
    FormsModule,
    ReactiveFormsModule,
    Select,
    Checkbox
  ],
  exports: [
    HeaderComponent,
    SignConfigureMenuComponent
  ]
})
export class BaseUiModule { }
