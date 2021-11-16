import {Component, NgModule, OnInit} from '@angular/core';
import {ComponentPortal, Portal, PortalModule, TemplatePortal} from '@angular/cdk/portal';
import {BrowserModule} from "@angular/platform-browser";


import {SectionsComponent} from "./sections.component";


@NgModule({
  declarations: [
    SectionsComponent
  ],
  imports: [
    BrowserModule,
    PortalModule
  ],
  providers: [],
  exports: [
    SectionsComponent
  ],
  bootstrap: [SectionsComponent]
})
export class SectionsModule { }
