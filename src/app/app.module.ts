import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveComponentModule } from '@ngrx/component';
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {AppEffects} from "../store/effects/app.effects";
import {HttpClientModule} from '@angular/common/http';
import { RouterModule} from '@angular/router';


import { AppComponent } from './app.component';
import {PortalModule} from "@angular/cdk/portal";
import {SectionsModule} from "./sections/sections.module";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import {FormReducer} from "../store/reducers/form.reducers";
import {CommonModule} from "@angular/common";
import {AuthModule} from "./auth/auth.module";
import {AuthComponent} from "./auth/auth.component";
import {SectionsComponent} from "./sections/sections.component";
import {AuthService} from "../services/authGuard.service";
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import {MatButtonModule} from "@angular/material/button";
import {MatGridListModule} from "@angular/material/grid-list";

@NgModule({
  declarations: [
    AppComponent,
    NotFoundPageComponent
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
