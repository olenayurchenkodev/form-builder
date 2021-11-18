import { NgModule} from '@angular/core';
import {BrowserModule} from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from "@angular/material/select";

import {FieldStylesComponent} from "./fieldStyles.component";
import {TextInputComponent} from "./textInput/textInput.component";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {ButtonInputComponent} from "./buttonInput/buttonInput.component";
import {SelectCheckboxInputComponent} from "./selectCheckboxInput/selectCheckboxInput.component";


@NgModule({
  declarations: [
    FieldStylesComponent,
    TextInputComponent,
    ButtonInputComponent,
    SelectCheckboxInputComponent
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
    FieldStylesComponent
  ],
  bootstrap: [FieldStylesComponent]
})
export class FieldStylesModule { }
