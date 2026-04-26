import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Badge } from 'primeng/badge';
import { Button, ButtonModule } from 'primeng/button';
import { Checkbox } from 'primeng/checkbox';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { Divider, DividerModule } from 'primeng/divider';
import { InputNumber, InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { Menu } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { MultiSelectModule } from 'primeng/multiselect';
import { PanelModule } from 'primeng/panel';
import { Select, SelectModule } from 'primeng/select';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TableModule } from 'primeng/table';
import { TabsModule } from 'primeng/tabs';
import { Toolbar } from 'primeng/toolbar';
import { CommonSignModule } from '../common-sign/common-sign.module';
import { RoadSignModule } from '../road-sign/road-sign.module';
import { HeaderComponent } from './header/header.component';
import { IdentificationComponent } from './identification/identification.component';
import { RoadImportanceComponent } from './road-importance/road-importance.component';
import { SignArrowGroupComponent } from './sign-arrow-group/sign-arrow-group.component';
import { SignArrowComponent } from './sign-arrow/sign-arrow.component';
import { SignConfigureMenuComponent } from './sign-configure-menu/sign-configure-menu.component';
import { SignDirectionComponent } from './sign-direction/sign-direction.component';
import { SignPartComponent } from './sign-part/sign-part.component';
import { SignSizeComponent } from './sign-size/sign-size.component';
import { SignTabsComponent } from './sign-tabs/sign-tabs.component';
import { SignTypeComponent } from './sign-type/sign-type.component';
import { ZoomComponent } from './zoom/zoom.component';
import { TextInputDialogComponent } from '../dialogs/text-input-dialog/text-input-dialog.component';

@NgModule({
    imports: [
        TextInputDialogComponent,
        CommonModule,
        ConfirmPopupModule,
        MultiSelectModule,
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
        DividerModule,
        InputNumberModule,
        FormsModule,
        ReactiveFormsModule,
        Select,
        Checkbox,
        CommonSignModule,
        InputNumber,
        Divider,
        RoadSignModule,
        HeaderComponent,
        SignConfigureMenuComponent,
        SignSizeComponent,
        SignTypeComponent,
        SignPartComponent,
        IdentificationComponent,
        SignDirectionComponent,
        RoadImportanceComponent,
        SignArrowComponent,
        SignArrowGroupComponent,
        ZoomComponent,
        SignTabsComponent,
    ],
    exports: [
        HeaderComponent,
        SignConfigureMenuComponent,
        ZoomComponent,
        SignTabsComponent,
    ],
})
export class BaseUiModule { }
