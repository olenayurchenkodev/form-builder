import { TestBed} from '@angular/core/testing';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import { StoreModule} from "@ngrx/store";
import {RouterModule, Router} from "@angular/router";
import { FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MockStore, provideMockStore} from "@ngrx/store/testing";
import {DragDropModule} from "@angular/cdk/drag-drop";
import {RouterTestingModule} from "@angular/router/testing";
import {FormStylesComponent} from "./form-styles.component";
import {SectionsComponent} from "../../../sections.component";
import {AuthComponent} from "../../../../auth/auth.component";
import {FormReducer} from "../../../../../store/reducers/form.reducers";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

describe('FormStylesComponent', () => {
  let routes: Router;
  let store: MockStore;
  const initialState = {
    id: [],
    styles: [],
    Input: {
      label: 'label',
      backcolour: 'none',
      placeholder: '',
      width: '100%',
      height: '30px',
      required: false
    },
    Textarea: {
      label: 'label',
      backcolour: 'none',
      placeholder: '',
      width: '100%',
      height: '40px',
      required: false
    },
    Button:{
      label: 'button',
      backcolour: 'none',
      width: '30%',
      height: '40px',
      border: 'none'
    },
    Checkbox:{
      label: 'label',
      backcolour: 'none',
      width: '100%',
      height: '30px',
      required: false,
      newOption: []
    },
    Select:{
      label: 'label',
      backcolour: 'none',
      width: '100%',
      height: '30px',
      required: false,
      newOption: []
    },
    Form: {
      label: 'Form Builder',
      colour: 'black',
      backcolour: 'none',
      border: '1px solid',
      fontSize: '24px',
      fontWeight: 'normal',
    },
    Auth: 'dfddffddddfd'
  };
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        StoreModule.forRoot( {fieldStyles: FormReducer}),
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatSelectModule,
        DragDropModule,
        MatInputModule,
        MatButtonModule,
        BrowserAnimationsModule,
        RouterModule.forRoot([
          { path: '', component: AuthComponent, pathMatch: 'full' },
          { path: 'login', component: AuthComponent},
          { path: 'form-builder', component: SectionsComponent},
          { path: '**', redirectTo: '' }
        ]),
        RouterTestingModule
      ],
      declarations: [
        FormStylesComponent
      ],
      providers: [
        provideMockStore({ initialState }),
      ]
    }).compileComponents();
    store = TestBed.inject(MockStore);
    routes = TestBed.inject(Router);
  });
  it('sendStyles', ( async() => {
    const fixture = TestBed.createComponent(FormStylesComponent);
    fixture.detectChanges();
    const component = fixture.componentInstance;
    spyOn(store, 'dispatch')
    component.customStyles = {
      label: 'label',
      colour: `rgb(20, 20, 20)`,
      backcolour: `rgb(20, 20, 20)`,
      border: 'solid',
      fontSize: `24px`,
      fontWeight: 'normal'
    }
    await component.sendStyles();
    expect(store.dispatch).toHaveBeenCalled()
  }));
});
