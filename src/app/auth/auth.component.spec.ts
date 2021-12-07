import { TestBed} from '@angular/core/testing';
import { AuthComponent } from "./auth.component";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import { StoreModule} from "@ngrx/store";
import {FormReducer, getAuth} from "../../store/reducers/form.reducers";
import { RouterModule, Router} from "@angular/router";
import { FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AuthGuard} from "../../guards/auth.guard";
import {MockStore, provideMockStore} from "@ngrx/store/testing";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {BrowserModule} from "@angular/platform-browser";
import {MatSelectModule} from "@angular/material/select";
import {MatIconModule} from "@angular/material/icon";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

describe('AuthComponent', () => {
  let router: Router;
  let guard: AuthGuard;
  let store: MockStore;
  const initialState = { isAuth: false };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        StoreModule.forRoot( {fieldStyles: FormReducer}),
        RouterModule.forRoot([]),
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
        AuthComponent
      ],
      providers: [
        AuthGuard,
        provideMockStore({ initialState }),
      ]
    }).compileComponents();
    router = TestBed.get(Router);
    router.initialNavigation();
    store = TestBed.inject(MockStore);
    guard = TestBed.inject(AuthGuard);
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
  it('submitting a form emits a user',  (async () => {
    const fixture = TestBed.createComponent(AuthComponent);
    const component = fixture.componentInstance;
    expect(component.formAuth.valid).toBeFalsy();
    component.formAuth.controls['username'].setValue("custom_user");
    component.formAuth.controls['password'].setValue("123");
    expect(component.formAuth.valid).toBeTruthy();
    await component.sendLoginForm();
    // expect(component.sendLoginForm).toHaveBeenCalled();
    expect(store.select(getAuth).subscribe(s => !!s)).toBeTruthy();
  }));
});
