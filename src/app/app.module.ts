import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatGridListModule } from "@angular/material/grid-list";
import { MatButtonModule } from "@angular/material/button";
import { AppEffects } from "../store/effects/app.effects";
import { BrowserModule } from '@angular/platform-browser';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveComponentModule } from '@ngrx/component';
import { PortalModule } from "@angular/cdk/portal";
import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { NgModule } from '@angular/core';

import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { SectionsComponent } from "./sections/sections.component";
import { FormReducer } from "../store/reducers/form.reducers";
import { SectionsModule } from "./sections/sections.module";
import { AuthService } from "../services/authGuard.service";
import { environment } from '../environments/environment';
import { AuthComponent } from "./auth/auth.component";
import { AppComponent } from './app.component';
import { AuthModule } from "./auth/auth.module";
import {WayDirectionPipe} from "../pipes/way-direction.pipe";


@NgModule({
  declarations: [
    AppComponent,
    NotFoundPageComponent,
    WayDirectionPipe
  ],
    imports: [
        StoreModule.forRoot({fieldStyles: FormReducer}),
        BrowserModule,
        PortalModule,
        SectionsModule,
        FormsModule,
        CommonModule,
        ReactiveFormsModule,
        RouterModule.forRoot([
            {path: '', component: AuthComponent},
            {path: 'not-found', component: NotFoundPageComponent},
            {path: 'form-builder', component: SectionsComponent, canActivate: [AuthService]},
            {path: '**', redirectTo: 'not-found'},
        ]),
        HttpClientModule,
        ReactiveComponentModule,
        StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
        EffectsModule.forRoot([AppEffects]),
        MatButtonModule,
        MatGridListModule
    ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    SectionsModule,
    AuthModule,
  ]
})
export class AppModule { }
