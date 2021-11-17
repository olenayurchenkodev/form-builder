import { NgModule} from '@angular/core';
import {BrowserModule} from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {CdkAccordionModule} from "@angular/cdk/accordion";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {FormBuilderComponent} from "./formBuilder.component";
import {MatButtonModule} from "@angular/material/button";
import {DragDropModule} from "@angular/cdk/drag-drop";


@NgModule({
  declarations: [
    FormBuilderComponent,
  ],
    imports: [
        BrowserModule,
        CdkAccordionModule,
        MatFormFieldModule,
        MatSelectModule,
        MatInputModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        FormsModule,
        MatButtonModule,
        DragDropModule
    ],
  providers: [],
  exports: [
    FormBuilderComponent
  ],
  bootstrap: [FormBuilderComponent]
})
export class FormBuilderModule { }

