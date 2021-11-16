import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {PortalModule} from "@angular/cdk/portal";
import {SectionsModule} from "./sections/sections.module";
import {SectionsComponent} from "./sections/sections.component";
import { AccordionComponent } from '../components/accordion/accordion.component';

@NgModule({
  declarations: [
    AppComponent,
    AccordionComponent
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
