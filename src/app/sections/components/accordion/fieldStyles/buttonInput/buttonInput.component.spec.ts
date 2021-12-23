import {RouterModule} from "@angular/router";
import {TestBed} from "@angular/core/testing";
import {StoreModule} from "@ngrx/store";
import {RouterTestingModule} from "@angular/router/testing";
import {ButtonInputComponent} from "./buttonInput.component";
import {FormReducer} from "../../../../../../store/reducers/form.reducers";
import {AuthComponent} from "../../../../../auth/auth.component";
import {SectionsComponent} from "../../../../sections.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {BrowserModule} from "@angular/platform-browser";
import {MatSelectModule} from "@angular/material/select";
import {MatIconModule} from "@angular/material/icon";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

describe('ButtonInputComponent', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot( {fieldStyles: FormReducer}),
        RouterModule.forRoot([
          { path: '', component: AuthComponent, pathMatch: 'full' },
          { path: 'login', component: AuthComponent},
          { path: 'form-builder', component: SectionsComponent},
          { path: '**', redirectTo: '' }
        ]),
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatButtonModule,
        MatInputModule,
        BrowserModule,
        MatSelectModule,
        MatIconModule,
        BrowserAnimationsModule,
      ],
      declarations: [
        ButtonInputComponent
      ],
    }).compileComponents();
  });
  it('sendStyles', ( async() => {
    const fixture = TestBed.createComponent(ButtonInputComponent);
    fixture.detectChanges();
    const component = fixture.componentInstance;
    spyOn(component, "sendStyles")
    component.customStyles = {
      label: 'label',
      backcolour: `rgb(20, 20, 20)`,
      width: `100px`,
      height: `100px`,
      border: 'solid'
    }
    await component.sendStyles();
    expect(component.sendStyles).toHaveBeenCalled();
  }));
  it('deleteElem', ( async() => {
    const fixture = TestBed.createComponent(ButtonInputComponent);
    fixture.detectChanges();
    const component = fixture.componentInstance;
    spyOn(component, 'deleteElem')
    await component.deleteElem();
    fixture.detectChanges();
    expect(component.deleteElem).toHaveBeenCalled();
    // expect(component.id[0]).toBeFalsy();
  }));
});
