import { NgModule} from '@angular/core';
import {BrowserModule} from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {AccordionComponent} from "./accordion.component";
import {FormStylesComponent} from "./formStyles/formStyles.component";
import {CdkAccordionModule} from "@angular/cdk/accordion";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {FieldStylesComponent} from "./fieldStyles/fieldStyles.component";


@NgModule({
  declarations: [
    AccordionComponent,
    FormStylesComponent,
    FieldStylesComponent
  ],
  imports: [
    BrowserModule,
    CdkAccordionModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule

  ],
  providers: [],
  exports: [
    AccordionComponent
  ],
  bootstrap: [AccordionComponent]
})
export class AccordionModule { }
