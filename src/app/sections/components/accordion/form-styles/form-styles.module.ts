import { NgModule} from '@angular/core';
import {BrowserModule} from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from "@angular/material/select";

import {FormStylesComponent} from "./form-styles.component";
import {FormBuilderModule} from "../../form-builder/form-builder.module";
import {FieldStylesModule} from "../field-styles/field-styles.module";


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
