import { NgModule} from '@angular/core';
import {BrowserModule} from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

import {AccordionComponent} from "./accordion.component";
import {CdkAccordionModule} from "@angular/cdk/accordion";
import {MatSelectModule} from "@angular/material/select";
import {FormStylesModule} from "./formStyles/formStyles.module";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {FieldStylesModule} from "./fieldStyles/fieldStyles.module";


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
