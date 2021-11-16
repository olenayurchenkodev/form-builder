import {NgModule} from '@angular/core';
import {PortalModule} from '@angular/cdk/portal';
import {BrowserModule} from "@angular/platform-browser";

import {SectionsComponent} from "./sections.component";
import {AccordionModule} from '../../components/accordion/accordion.module'


@NgModule({
  declarations: [
    SectionsComponent
  ],
  imports: [
    BrowserModule,
    PortalModule,
    AccordionModule
  ],
  providers: [],
  exports: [
    SectionsComponent
  ],
  bootstrap: [SectionsComponent]
})
export class SectionsModule { }
