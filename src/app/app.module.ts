import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { definePreset } from '@primeng/themes';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import { HomeModule } from './home/home.module';

const color = "sky"

const semanticValues = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950]

export const Preset = definePreset(Aura, {
  semantic: {
    primary: Object.fromEntries(
      semanticValues.map(semanticValue => ([semanticValue, `{${color}.${semanticValue}}`]))
    )
  }
});


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule
  ],
  providers: [
    provideAnimationsAsync(),
    providePrimeNG({
      ripple: true,
      theme: {
        options: {
          darkModeSelector: '.dark-mode'
        },
        preset: Preset
      }
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
