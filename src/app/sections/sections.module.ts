import {NgModule} from '@angular/core';
import {PortalModule} from '@angular/cdk/portal';
import {BrowserModule} from "@angular/platform-browser";

import {SectionsComponent} from "./sections.component";
import {AccordionModule} from './components/accordion/accordion.module';
import {InputCardModule} from "./components/inputCard/inputCard.module";
import {FormBuilderModule} from "./components/formBuilder/formBuilder.module";


@NgModule({
  declarations: [
    SectionsComponent
  ],
  imports: [
    BrowserModule,
    PortalModule,
    AccordionModule,
    InputCardModule,
    FormBuilderModule
  ],
  providers: [],
  exports: [
    SectionsComponent
  ],
  bootstrap: [SectionsComponent]
})
export class SectionsModule { }
