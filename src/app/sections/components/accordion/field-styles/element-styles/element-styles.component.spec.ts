import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementStylesComponent } from './element-styles.component';
import {StoreModule} from "@ngrx/store";
import {FormReducer} from "../../../../../../store/reducers/form.reducers";
import {Router, RouterModule} from "@angular/router";
import {MockStore, provideMockStore} from "@ngrx/store/testing";
import {AuthComponent} from "../../../../../auth/auth.component";
import {SectionsComponent} from "../../../../sections.component";
import {RouterTestingModule} from "@angular/router/testing";
import {initialState} from "../../../../../config";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ReactiveFormsModule} from "@angular/forms";

describe('ElementStylesComponent', () => {
  let component: ElementStylesComponent;
  let fixture: ComponentFixture<ElementStylesComponent>;
  let routes: Router;
  let store: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementStylesComponent ],
      imports: [
        StoreModule.forRoot( {fieldStyles: FormReducer}),
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
        BrowserAnimationsModule,
        ReactiveFormsModule
      ],
      providers: [
        provideMockStore({ initialState }),
      ]
    }).compileComponents();

    store = TestBed.inject(MockStore);
    routes = TestBed.inject(Router);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementStylesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('sendStyles', () => {
    expect(component).toBeTruthy();
  });
});
