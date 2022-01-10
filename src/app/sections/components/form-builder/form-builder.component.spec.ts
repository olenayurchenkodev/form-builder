import {RouterModule} from "@angular/router";
import {TestBed} from "@angular/core/testing";
import {createFeatureSelector, createSelector} from "@ngrx/store";
import {FieldStyle} from "../../../../store/reducers/form.reducers";
import {FormBuilderComponent} from "./form-builder.component";
import {AuthComponent} from "../../../auth/auth.component";
import {SectionsComponent} from "../../sections.component";
import {RouterTestingModule} from "@angular/router/testing";
import {MockStore, provideMockStore} from "@ngrx/store/testing";
import {DragDropModule} from "@angular/cdk/drag-drop";
import {MatFormFieldModule} from "@angular/material/form-field";
import { initialState } from "../../../config";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {BrowserModule} from "@angular/platform-browser";
import {MatSelectModule} from "@angular/material/select";
import {MatIconModule} from "@angular/material/icon";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

export const selectFieldStyles =
  createFeatureSelector<FieldStyle>('fieldStyles');

export const selectFormStyles = createSelector(
  selectFieldStyles,
  (state: FieldStyle) => {
    return state.Form;
  }
);

describe('FormBuilderComponent', () => {
  let store: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot([
          { path: '', component: AuthComponent, pathMatch: 'full' },
          { path: 'login', component: AuthComponent},
          { path: 'form-builder', component: SectionsComponent},
          { path: '**', redirectTo: '' }
        ]),
        RouterTestingModule,
        DragDropModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        FormsModule,
        MatButtonModule,
        MatInputModule,
        BrowserModule,
        MatSelectModule,
        MatIconModule,
        BrowserAnimationsModule,
      ],
      declarations: [
        FormBuilderComponent
      ],
      providers: [
        provideMockStore({ initialState }),
      ]
    }).compileComponents();
    store = TestBed.inject(MockStore);
  });
  it('onInit', ( async() => {
    const selectFieldStyles = createFeatureSelector<
      { [key: string]: string }
      >('fieldStyles');
    const mockAuthState = store.overrideSelector(
      selectFieldStyles,
      {
        label: 'Form Builder',
        colour: '0, 0, 0',
        backcolour: '255, 255, 255',
        border: 'solid',
        fontSize: '24',
        fontWeight: 'normal',
      }
    );
    const fixture = TestBed.createComponent(FormBuilderComponent);
    const component = fixture.componentInstance;
    await store.select(mockAuthState)
      .subscribe(s => component.formStyles = s)
    fixture.detectChanges();
    expect(component.formStyles).toEqual({
      label: 'Form Builder',
      colour: '0, 0, 0',
      backcolour: '255, 255, 255',
      border: 'solid',
      fontSize: '24',
      fontWeight: 'normal',
    });
  }));
  it('changePosForward', ( async() => {
    const fixture = TestBed.createComponent(FormBuilderComponent);
    const component = fixture.componentInstance;
    let arr = [1, 2, 3, 4, 5]
    component.changePos(arr, 2, 4);
    expect(arr).toEqual([1, 2, 4, 5, 3]);
  }));
  it('changePosReverse', ( async() => {
    const fixture = TestBed.createComponent(FormBuilderComponent);
    const component = fixture.componentInstance;
    let arr = [1, 2, 3, 4, 5]
    component.changePos(arr, 4, 2);
    expect(arr).toEqual([1, 2, 5, 3, 4]);
  }));
  it('addField', ( async() => {
    const fixture = TestBed.createComponent(FormBuilderComponent);
    const component = fixture.componentInstance;
    spyOn(store, 'dispatch')
    await component.addField('id', 'Input');
    expect(store.dispatch).toHaveBeenCalled()
  }));
  it('deleteElem', ( async() => {
    const fixture = TestBed.createComponent(FormBuilderComponent);
    const component = fixture.componentInstance;
    component.ids = ['1', '2', '3'];
    component.form = ['111', '222', '333'];
    component.deleteElem('2');
    expect(component.ids).toEqual(['1', '3']);
    expect(component.form).toEqual(['111', '333'])
  }));
  it('selectInput', ( async() => {
    const fixture = TestBed.createComponent(FormBuilderComponent);
    const component = fixture.componentInstance;
    component.click = '';
    component.selectInput('Input', ['1']);
    expect(component.click).toEqual('1');
  }));
  it('showFormValueCompleted', ( async() => {
    const fixture = TestBed.createComponent(FormBuilderComponent);
    const component = fixture.componentInstance;
    component.isFormComplete = true;
    component.showFormValue();
    expect(component.isShowValue).toEqual(true);
    setTimeout(()=>expect(component.isShowValue).toEqual(false), 5000);
  }));
  it('showFormValueNotCompleted', ( async() => {
    const fixture = TestBed.createComponent(FormBuilderComponent);
    const component = fixture.componentInstance;
    component.isFormComplete = false;
    component.showFormValue();
    expect(component.isShowValue).toEqual(false);
  }));
  it('generateForm', ( async() => {
    const fixture = TestBed.createComponent(FormBuilderComponent);
    const component = fixture.componentInstance;
    component.isFormComplete = true;
    component.generateForm();
    expect(component.isFormComplete).toEqual(false);
    component.generateForm();
    expect(component.isFormComplete).toEqual(true);
  }));
  it('addItem', ( async() => {
    const fixture = TestBed.createComponent(FormBuilderComponent);
    const component = fixture.componentInstance;
    component.formValues.splice(0, 0, {value: '', label: ''})
    await component.addItem('input', 0);
    expect(component.formValues[0].label).toEqual('input')
  }));
});
