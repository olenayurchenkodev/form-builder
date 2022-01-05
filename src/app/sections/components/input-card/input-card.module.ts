import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from "@angular/material/form-field";
import { CdkAccordionModule } from "@angular/cdk/accordion";
import { MatSelectModule } from "@angular/material/select";
import { BrowserModule } from "@angular/platform-browser";
import { MatInputModule } from "@angular/material/input";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { NgModule } from '@angular/core';

import { InputCardComponent } from "./input-card.component";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";


@NgModule({
  declarations: [
    InputCardComponent,
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
    DragDropModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  exports: [
    InputCardComponent,
  ],
  bootstrap: [InputCardComponent]
})
export class InputCardModule { }
