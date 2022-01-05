import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserModule } from "@angular/platform-browser";
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from "@angular/material/select";
import { NgModule } from '@angular/core';

import { ElementStylesComponent } from './element-styles/element-styles.component';
import { FirstCamelPipe } from "../../../../../pipes/first-camel.pipe";
import { FieldStylesComponent } from "./field-styles.component";


@NgModule({
  declarations: [
    FieldStylesComponent,
    FirstCamelPipe,
    ElementStylesComponent
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
    MatCheckboxModule

  ],
  providers: [],
    exports: [
        FieldStylesComponent,
        FirstCamelPipe,
        ElementStylesComponent
    ],
  bootstrap: [FieldStylesComponent]
})
export class FieldStylesModule { }
