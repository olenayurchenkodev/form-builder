import {RouterModule} from "@angular/router";
import {TestBed} from "@angular/core/testing";
import {StoreModule} from "@ngrx/store";
import {FormReducer} from "../../../../../../store/reducers/form.reducers";
import {AuthComponent} from "../../../../../auth/auth.component";
import {SectionsComponent} from "../../../../sections.component";
import {CheckboxComponent} from "./checkbox.component";
import {MatLabel} from "@angular/material/form-field";

describe('CheckboxComponent', () => {

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
        CheckboxComponent,
        MatLabel,
      ],
    }).compileComponents();
  });
  it('onInit', ( async() => {
    const fixture = TestBed.createComponent(CheckboxComponent);
    const component = fixture.componentInstance;
    spyOn(component, 'ngOnInit')
    await component.ngOnInit();
    expect(component.ngOnInit).toHaveBeenCalled();
  }));
});
