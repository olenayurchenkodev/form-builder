import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {AppEffects} from "./app.effects";

import { AppComponent } from './app.component';
import {PortalModule} from "@angular/cdk/portal";
import {SectionsModule} from "./sections/sections.module";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';


let reducers;

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    StoreModule.forRoot( {}),
    BrowserModule,
    PortalModule,
    SectionsModule,
    FormsModule,
    ReactiveFormsModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([AppEffects])
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    SectionsModule
  ]
})
export class AppModule { }
