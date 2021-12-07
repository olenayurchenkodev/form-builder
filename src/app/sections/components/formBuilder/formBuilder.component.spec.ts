import {RouterModule} from "@angular/router";
import {TestBed} from "@angular/core/testing";
import {StoreModule} from "@ngrx/store";
import {FormReducer} from "../../../../store/reducers/form.reducers";
import {FormBuilderComponent} from "./formBuilder.component";
import {AuthComponent} from "../../../auth/auth.component";
import {SectionsComponent} from "../../sections.component";

describe('FormBuilderComponent', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot( {fieldStyles: FormReducer}),
        RouterModule.forRoot([
          { path: 'login', component: AuthComponent},
          { path: 'form-builder', component: SectionsComponent}
        ])
      ],
      declarations: [
        FormBuilderComponent
      ],
    }).compileComponents();
  });
  it('onInit', ( async() => {
    const fixture = TestBed.createComponent(FormBuilderComponent);
    const component = fixture.componentInstance;
    await component.ngOnInit();
    expect(component.formStyles).toBeDefined();
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
    spyOn(component, 'addField')
    component.addField('id', 'Input');
    expect(component.addField).toHaveBeenCalled()
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
    component.selectInput('Input', '1');
    expect(component.click).toEqual(true);
  }));
});
