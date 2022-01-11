import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementStylesComponent } from './element-styles.component';
import { StoreModule} from "@ngrx/store";
import {Router, RouterModule} from "@angular/router";
import {MockStore, provideMockStore} from "@ngrx/store/testing";
import {AuthComponent} from "../../../../../auth/auth.component";
import {SectionsComponent} from "../../../../sections.component";
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
import {DeleteElemService} from "../../../../../../services/deleteElem.service";

describe('ElementStylesComponent', () => {
  let component: ElementStylesComponent;
  let fixture: ComponentFixture<ElementStylesComponent>;
  let router: Router;
  let store: MockStore;
  let deleteElemService = new DeleteElemService();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementStylesComponent ],
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
    fixture = TestBed.createComponent(ElementStylesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  // it('onChanges', (async () => {
  //   component.ngOnChanges({
  //     prop1: new SimpleChange('old', 'new', false),
  //   });
  //   expect(component.selectedClass).toEqual('active');
  // }));
  it('sendStyles', () => {
    spyOn(store, 'dispatch')
    component.customStyles = {
      label: 'select label',
      backcolour: '255, 255, 255',
      width: '400',
      placeholder: '',
      height: '40',
      border: 'none',
      required: false,
      newOption: ''
    }
    component.sendStyles();
    expect(store.dispatch).toHaveBeenCalled();
  });
  it('addOption', () => {
    spyOn(store, 'dispatch')
    component.addOption();
    expect(store.dispatch).toHaveBeenCalled();
  });
  it('deleteElem', () => {
    component.id = 'b'
    spyOn(store, 'dispatch');
    spyOn(deleteElemService, 'sendMessage');
    component.deleteElem();
    expect(store.dispatch).toHaveBeenCalled();
  });
});
