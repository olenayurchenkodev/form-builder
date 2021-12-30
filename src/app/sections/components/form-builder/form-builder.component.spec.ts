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
    Auth: ''
  };

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
    const fixture = TestBed.createComponent(FormBuilderComponent);
    const component = fixture.componentInstance;
    await component.ngOnInit();
    // component.formStyles = store.select(selectFormStyles);
    fixture.detectChanges();
    expect(component.formStyles).toBeTruthy();
  }));
  it('changePos', ( async() => {
    const fixture = TestBed.createComponent(FormBuilderComponent);
    const component = fixture.componentInstance;
    let arr = [1, 2, 3, 4, 5]
    component.changePos(arr, 2, 4);
    expect(arr).toEqual([1, 2, 4, 5, 3]);
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
    component.click = false;
    component.selectInput('Input', ['1']);
    expect(component.click).toEqual(true)
  }));
});
