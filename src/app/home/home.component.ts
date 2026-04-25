import { Component } from '@angular/core';
import { HeaderComponent } from '../base-ui/header/header.component';
import { SignTabsComponent } from '../base-ui/sign-tabs/sign-tabs.component';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    imports: [HeaderComponent, SignTabsComponent],
})
export class HomeComponent { }
