import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementsComponent } from './elements.component';
import {createFeatureSelector, StoreModule} from "@ngrx/store";
import {FormReducer} from "../../../../../store/reducers/form.reducers";
import {Router, RouterModule} from "@angular/router";
import {AuthComponent} from "../../../../auth/auth.component";
import {SectionsComponent} from "../../../sections.component";
import {RouterTestingModule} from "@angular/router/testing";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MockStore, provideMockStore} from "@ngrx/store/testing";
import {initialState} from "../../../../config";
import {BrowserModule} from "@angular/platform-browser";
import {MatIconModule} from "@angular/material/icon";
import { SimpleChange} from "@angular/core";

describe('ElementsComponent', () => {
  let component: ElementsComponent;
  let fixture: ComponentFixture<ElementsComponent>;
  let router: Router;
  let store: MockStore;
  let selectFieldStyles;
  let mockAuthState: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementsComponent ],
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
        FormsModule,
        ReactiveFormsModule,
        BrowserModule,
        MatIconModule,
        BrowserAnimationsModule,
      ],
      providers: [
        provideMockStore({ initialState }),
      ]
    }).overrideTemplate(ElementsComponent,`<span></span>`)
    .compileComponents();

    store = TestBed.inject(MockStore);
    router = TestBed.inject(Router);
    router.initialNavigation();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    selectFieldStyles = createFeatureSelector<
      { [key: string]: string | boolean | []  }
      >('fieldStyles');
    mockAuthState = store.overrideSelector(
      selectFieldStyles,
      {
        label: 'input label',
        backcolour: '255, 255, 255',
        placeholder: '',
        width: '400',
        height: '40',
        border: 'none',
        required: '',
        newOption: ''
      }
    );
  });

  it('ngOnInitWorks', () => {
    component.isCompleted = false;
    component.ngOnInit();
    store.select(mockAuthState).subscribe(s => {
      expect(s).toEqual({
        label: 'input label',
        backcolour: '255, 255, 255',
        placeholder: '',
        width: '400',
        height: '40',
        border: 'none',
        required: '',
        newOption: ''
      })
    })
  });
  // it('ngOnInitNotWorks', () => {
  //   component.isCompleted = true;
  //   fixture.detectChanges();
  //   component.ngOnInit();
  //   expect(component.styles).toEqual({});
  // });
  it('ngOnChangesSelected', () => {
    component.selected = '123';
    component.id = '123';
    component.ngOnChanges({
      prop1: new SimpleChange('old', 'new', false),
    });
    expect(component.selectedClass).toEqual('active');
  });
  it('ngOnChangesNotActive', () => {
    component.selected = '123';
    component.id = '122';
    component.ngOnChanges({
      prop1: new SimpleChange('old', 'new', false),
    });
    expect(component.selectedClass).toEqual('');
  });
  it('addNewItem', () => {
    spyOn(component.newItemEvent, 'emit')
    component.addNewItem('item');
    expect(component.newItemEvent.emit).toHaveBeenCalledWith('item')
  });
  it('writeValue', (async () => {
    const spy = spyOnProperty(component, 'value', 'set').and.returnValue('ddd');
    component.writeValue('ddd')
    expect(spy).toHaveBeenCalled();
  }));
});
