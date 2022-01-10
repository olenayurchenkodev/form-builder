import { ComponentFixture, TestBed } from '@angular/core/testing';

import {StoreModule} from "@ngrx/store";
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
import {AccordionComponent} from "./accordion.component";
import {AuthComponent} from "../../../auth/auth.component";
import {SectionsComponent} from "../../sections.component";
import {FormStylesModule} from "./form-styles/form-styles.module";
import {FieldStylesModule} from "./field-styles/field-styles.module";
import {CdkAccordionModule} from "@angular/cdk/accordion";

describe('ElementStylesComponent', () => {
  let component: AccordionComponent;
  let fixture: ComponentFixture<AccordionComponent>;
  let router: Router;
  let store: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccordionComponent ],
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
        FormStylesModule,
        FieldStylesModule,
        CdkAccordionModule,
        MatInputModule,
        MatCheckboxModule,
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
    fixture = TestBed.createComponent(AccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('creates', (async () => {
    expect(component).toBeTruthy();
  }));
  it('expandedItemFormExpanded', (async () => {
    const res = component.expandedItem(0);
    expect(res).toEqual(true);
  }));
  it('expandedItemFormHiden', (async () => {
    const res = component.expandedItem(1);
    expect(res).toEqual(false);
  }));
  it('expandedItemFieldExpanded', (async () => {
    component.elemData = ['ggggg']
    const res = component.expandedItem(1);
    expect(res).toEqual(true);
  }));
  it('expandedItemFieldHiden', (async () => {
    component.elemData = ['ggggg']
    const res = component.expandedItem(0);
    expect(res).toEqual(false);
  }));
  it('onDestroy', (async () => {
    spyOn(component.unsubscribe$, 'complete');
    component.onDestroy();
    expect(component.unsubscribe$.complete).toHaveBeenCalled();
  }));
});
