import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatFormFieldModule } from "@angular/material/form-field";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { HttpClientModule } from "@angular/common/http";
import { MatIconModule } from "@angular/material/icon";
import { PortalModule } from '@angular/cdk/portal';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AuthService } from "../../services/authGuard.service";
import { AuthComponent } from "./auth.component";


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
