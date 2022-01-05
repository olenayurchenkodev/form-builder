import { MatGridListModule } from "@angular/material/grid-list";
import { BrowserModule } from "@angular/platform-browser";
import { PortalModule } from '@angular/cdk/portal';
import { NgModule } from '@angular/core';

import { FormBuilderModule } from "./components/form-builder/form-builder.module";
import { AccordionModule } from './components/accordion/accordion.module';
import { InputCardModule } from "./components/input-card/input-card.module";
import { SectionsComponent } from "./sections.component";


@NgModule({
  declarations: [
    SectionsComponent
  ],
    imports: [
        BrowserModule,
        PortalModule,
        AccordionModule,
        InputCardModule,
        FormBuilderModule,
        MatGridListModule
    ],
  providers: [],
  exports: [
    SectionsComponent
  ],
  bootstrap: [SectionsComponent]
})
export class SectionsModule { }
