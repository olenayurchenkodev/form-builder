import {RouterModule} from "@angular/router";
import {TestBed} from "@angular/core/testing";
import {StoreModule} from "@ngrx/store";
import {FormReducer} from "../../../../../../store/reducers/form.reducers";
import {AuthComponent} from "../../../../../auth/auth.component";
import {SectionsComponent} from "../../../../sections.component";
import {ButtonComponent} from "./button.component";
import {MatLabel} from "@angular/material/form-field";

describe('ButtonComponent', () => {

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
        ButtonComponent,
        MatLabel,
      ],
    }).compileComponents();
  });
  it('onInit', ( async() => {
    const fixture = TestBed.createComponent(ButtonComponent);
    const component = fixture.componentInstance;
    spyOn(component, 'ngOnInit')
    await component.ngOnInit();
    expect(component.ngOnInit).toHaveBeenCalled();
  }));
});
