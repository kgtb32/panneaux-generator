import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { definePreset } from '@primeng/themes';
import Aura from '@primeng/themes/aura';
import { providePrimeNG } from 'primeng/config';
import { DialogService } from 'primeng/dynamicdialog';
import { HomeModule } from './home/home.module';
import { provideHttpClient } from '@angular/common/http';
import { ConfirmationService } from 'primeng/api';

const color = 'sky';

const semanticValues = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];

export const Preset = definePreset(Aura, {
  semantic: {
    primary: Object.fromEntries(
      semanticValues.map((semanticValue) => [
        semanticValue,
        `{${color}.${semanticValue}}`,
      ]),
    ),
  },
});

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HomeModule],
  providers: [
    ConfirmationService,
    DialogService,
    provideAnimationsAsync(),
    provideHttpClient(),
    providePrimeNG({
      ripple: true,
      theme: {
        options: {
          darkModeSelector: '.dark-mode',
        },
        preset: Preset,
      },
    }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
