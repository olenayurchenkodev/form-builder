import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from "@angular/material/select";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from '@angular/core';

import { FormBuilderModule } from "../../form-builder/form-builder.module";
import { FieldStylesModule } from "../field-styles/field-styles.module";
import { FormStylesComponent } from "./form-styles.component";


@NgModule({
  declarations: [
    FormStylesComponent
  ],
  imports: [
    BrowserModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatInputModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    FormBuilderModule,
    FieldStylesModule,
  ],
  providers: [],
  exports: [
    FormStylesComponent
  ],
  bootstrap: [FormStylesComponent]
})
export class FormStylesModule { }
