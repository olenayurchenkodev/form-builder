import {fakeAsync, TestBed, tick} from '@angular/core/testing';
import { AuthComponent } from "./auth.component";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import { StoreModule} from "@ngrx/store";
import {FormReducer} from "../../store/reducers/form.reducers";
import { RouterModule, Router} from "@angular/router";
import { FormsModule, ReactiveFormsModule} from "@angular/forms";

fdescribe('AuthComponent', () => {
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        StoreModule.forRoot( {fieldStyles: FormReducer}),
        RouterModule.forRoot([]),
        FormsModule,
        ReactiveFormsModule
      ],
      declarations: [
        AuthComponent
      ],
    }).compileComponents();
    router = TestBed.get(Router);
    router.initialNavigation();
  });
  it('pass field login falsy', () => {
    const fixture = TestBed.createComponent(AuthComponent);
    const component = fixture.componentInstance;
    let pass = component.formAuth.controls['password'];
    expect(pass.valid).toBeFalsy();
  });
  it('pass field login trues', () => {
    const fixture = TestBed.createComponent(AuthComponent);
    const component = fixture.componentInstance;
    let pass = component.formAuth.controls['password'];
    pass.setValue('123')
    expect(pass.valid).toBeTruthy();
  });
  it('auth fields validity', () => {
    const fixture = TestBed.createComponent(AuthComponent);
    const component = fixture.componentInstance;
    let password = component.formAuth.controls['password'];
    let username = component.formAuth.controls['username'];
    let errors = (password.errors && username.errors) || {};
    expect(errors['required']).toBeTruthy();
  });
  it('submitting a form emits a user', fakeAsync (() => {
    const fixture = TestBed.createComponent(AuthComponent);
    const component = fixture.componentInstance;
    const submitEl = fixture.debugElement;
    expect(component.formAuth.valid).toBeFalsy();
    component.formAuth.controls['username'].setValue("custom_user");
    component.formAuth.controls['password'].setValue("123");
    expect(component.formAuth.valid).toBeTruthy();
    component.sendLoginForm();
    tick()
    expect(location.pathname).toBe('/');
  }));
});
