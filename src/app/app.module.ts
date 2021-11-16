import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {PortalModule} from "@angular/cdk/portal";
import {SectionsModule} from "./sections/sections.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PortalModule,
    SectionsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    SectionsModule
  ]
})
export class AppModule { }
