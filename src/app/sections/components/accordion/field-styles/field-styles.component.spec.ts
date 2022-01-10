import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreModule} from "@ngrx/store";
import {Router, RouterModule} from "@angular/router";
import {MockStore, provideMockStore} from "@ngrx/store/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {BrowserModule} from "@angular/platform-browser";
import {MatIconModule} from "@angular/material/icon";
import {FieldStylesComponent} from "./field-styles.component";
import {AuthComponent} from "../../../../auth/auth.component";
import {SectionsComponent} from "../../../sections.component";

describe('FieldStylesComponent', () => {
  let component: FieldStylesComponent;
  let fixture: ComponentFixture<FieldStylesComponent>;
  let router: Router;
  let store: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FieldStylesComponent ],
      imports: [
        StoreModule.forRoot( {}),
        RouterModule.forRoot([
          { path: '', component: AuthComponent, pathMatch: 'full' },
          { path: 'login', component: AuthComponent},
          { path: 'form-builder', component: SectionsComponent},
          { path: '**', redirectTo: '' }
        ]),
        RouterTestingModule,
        MatFormFieldModule,
        MatSelectModule,
        MatInputModule,
        MatButtonModule,
        MatCheckboxModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        FormsModule,
        BrowserModule,
        MatIconModule,
        BrowserAnimationsModule,
      ],
      providers: [
        provideMockStore({}),
      ]
    }).compileComponents();

    store = TestBed.inject(MockStore);
    router = TestBed.inject(Router);
    router.initialNavigation();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldStylesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('sendStyles', () => {
    expect(component).toBeTruthy();
  });
});
