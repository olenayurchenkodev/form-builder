import { NgModule} from '@angular/core';
import {BrowserModule} from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CdkAccordionModule} from "@angular/cdk/accordion";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {DragDropModule} from "@angular/cdk/drag-drop";
import {MatCheckboxModule} from "@angular/material/checkbox";
import { CommonModule } from '@angular/common';
import {ReactiveComponentModule} from "@ngrx/component";

import {FormBuilderComponent} from "./formBuilder.component";
import {InputCardModule} from "../inputCard/inputCard.module";
import {InputComponent} from "./inputTypes/input/input.component";
import {TextareaComponent} from "./inputTypes/textarea/textarea.component";
import {ButtonComponent} from "./inputTypes/button/button.component";
import {CheckboxComponent} from "./inputTypes/checkbox/checkbox.component";
import {SelectComponent} from "./inputTypes/select/select.component";

@NgModule({
  declarations: [
    FormBuilderComponent,
    InputComponent,
    TextareaComponent,
    ButtonComponent,
    CheckboxComponent,
    SelectComponent
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

