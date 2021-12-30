import { NgModule} from '@angular/core';
import {BrowserModule} from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from "@angular/material/select";

import {FieldStylesComponent} from "./field-styles.component";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {FirstCamelPipe} from "../../../../../pipes/first-camel.pipe";
import { ElementStylesComponent } from './element-styles/element-styles.component';


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
