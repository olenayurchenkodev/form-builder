import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveComponentModule } from '@ngrx/component';
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {AppEffects} from "./app.effects";
import {HttpClientModule} from '@angular/common/http';
import {Routes, RouterModule} from '@angular/router';


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
import {AuthGuard} from "../guards/auth.guard";

const routes: Routes =[
  { path: 'login', component: AuthComponent},
  { path: 'form-builder',
    component: SectionsComponent},
  { path: '**', component: AuthComponent}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    StoreModule.forRoot( {fieldStyles: FormReducer}),
    BrowserModule,
    PortalModule,
    RouterModule,
    SectionsModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ReactiveComponentModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([AppEffects])
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    SectionsModule,
    AuthModule
  ]
})
export class AppModule { }
