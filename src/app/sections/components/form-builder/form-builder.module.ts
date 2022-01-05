import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { BrowserModule } from "@angular/platform-browser";
import { CdkAccordionModule } from "@angular/cdk/accordion";
import { MatSelectModule } from "@angular/material/select";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { ReactiveComponentModule } from "@ngrx/component";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ElementsComponent } from './elements/elements.component';
import { InputCardModule } from "../input-card/input-card.module";
import { FormBuilderComponent } from "./form-builder.component";


@NgModule({
  declarations: [
    FormBuilderComponent,
    ElementsComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    CdkAccordionModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    DragDropModule,
    InputCardModule,
    MatCheckboxModule,
    ReactiveComponentModule
  ],
  providers: [],
  exports: [
    FormBuilderComponent,
  ],
  bootstrap: [FormBuilderComponent]
})
export class FormBuilderModule { }

