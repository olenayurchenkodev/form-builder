import {NgModule} from '@angular/core';
import {PortalModule} from '@angular/cdk/portal';
import {BrowserModule} from "@angular/platform-browser";
import { RouterModule } from '@angular/router';

import {AuthComponent} from "./auth.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {MatIconModule} from "@angular/material/icon";
import {AuthService} from "../../services/authGuard.service";


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
        MatIconModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        // HttpClientTestingModule,
        RouterModule.forRoot([
            {path: '', redirectTo: '/', pathMatch: 'full'}
        ])
    ],
  providers: [
    AuthService
  ],
  exports: [
    AuthComponent
  ],
  bootstrap: [AuthComponent]
})
export class AuthModule { }
