import {NgModule} from '@angular/core';
import {PortalModule} from '@angular/cdk/portal';
import {BrowserModule} from "@angular/platform-browser";

import {AuthComponent} from "./auth.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    BrowserModule,
    PortalModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    BrowserModule,
    MatFormFieldModule,
    MatSelectModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  exports: [
    AuthComponent
  ],
  bootstrap: [AuthComponent]
})
export class AuthModule { }
