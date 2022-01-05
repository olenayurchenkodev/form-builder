import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from "@angular/material/checkbox";
import { BrowserModule } from "@angular/platform-browser";
import { CdkAccordionModule } from "@angular/cdk/accordion";
import { MatSelectModule } from "@angular/material/select";
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { NgModule } from '@angular/core';

import { FieldStylesModule } from "./field-styles/field-styles.module";
import { FormStylesModule } from "./form-styles/form-styles.module";
import { AccordionComponent } from "./accordion.component";


@NgModule({
  declarations: [
    AccordionComponent,
  ],
    imports: [
        FormStylesModule,
        FieldStylesModule,
        BrowserModule,
        CdkAccordionModule,
        MatFormFieldModule,
        MatSelectModule,
        MatInputModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        FormsModule,
        MatCheckboxModule,
        MatButtonModule
    ],
  providers: [],
  exports: [
      AccordionComponent
  ],
  bootstrap: [AccordionComponent]
})
export class AccordionModule { }
