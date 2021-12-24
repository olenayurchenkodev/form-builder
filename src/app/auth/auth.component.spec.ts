import { TestBed} from '@angular/core/testing';
import { AuthComponent } from "./auth.component";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {FormReducer, getAuth} from "../../store/reducers/form.reducers";
import { RouterModule, Router} from "@angular/router";
import { FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AuthService} from '../../services/authGuard.service'
import {MockStore, provideMockStore} from "@ngrx/store/testing";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {BrowserModule, By} from "@angular/platform-browser";
import {MatSelectModule} from "@angular/material/select";
import {MatIconModule} from "@angular/material/icon";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {SectionsComponent} from "../sections/sections.component";
import {RouterTestingModule} from "@angular/router/testing";
import {NotFoundPageComponent} from "../not-found-page/not-found-page.component";
import {createField} from "../../store/actions/form.actions";

fdescribe('AuthComponent', () => {
  let store: MockStore;
  let router: Router;
  let guard: AuthService;
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
        HttpClientTestingModule,
        RouterModule.forRoot([
          {path: '', component: AuthComponent },
          {path: 'not-found', component: NotFoundPageComponent},
          {path: 'form-builder', component: SectionsComponent, canActivate: [AuthService]},
          {path: '**', redirectTo: 'not-found'},
        ]),
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatButtonModule,
        MatInputModule,
        BrowserModule,
        MatSelectModule,
        MatIconModule,
        BrowserAnimationsModule,
        RouterTestingModule
      ],
      declarations: [
        AuthComponent
      ],
      providers: [
        AuthService,
        provideMockStore({ initialState }),
      ]
    }).compileComponents();
    router = TestBed.get(Router);
    router.initialNavigation();
    store = TestBed.inject(MockStore);
    guard = TestBed.inject(AuthService);

  });
  it('getErrorMessageFalse', () => {
    const fixture = TestBed.createComponent(AuthComponent);
    fixture.detectChanges();
    const component = fixture.componentInstance;
    let pass = component.formAuth.controls['password'];
    expect(pass.valid).toBeFalsy();
    expect(store.select(getAuth).subscribe(s => !!s)).toBeTruthy();
  });
  it('getErrorMessageTrue', () => {
    const fixture = TestBed.createComponent(AuthComponent);
    fixture.detectChanges();
    const component = fixture.componentInstance;
    let pass = component.formAuth.controls['password'];
    pass.setValue('123');
    expect(pass.valid).toBeTruthy();
    expect(store.select(getAuth).subscribe(s => !!s)).toBeTruthy();
  });
  it('sendLoginForm', () => {
    const fixture = TestBed.createComponent(AuthComponent);
    fixture.detectChanges();
    const component = fixture.componentInstance;
    spyOn(component, "sendLoginForm")
    let password = component.formAuth.controls['password'];
    password.setValue('123')
    let username = component.formAuth.controls['username'];
    username.setValue('custom_user')
    let button = fixture.debugElement.query(By.css('button'));
    button.triggerEventHandler('click', null);
    expect(component.sendLoginForm).toHaveBeenCalled();
    expect(store.select(getAuth).subscribe(s => !!s)).toBeTruthy();
  });
  it('sendRegisterForm', () => {
    const fixture = TestBed.createComponent(AuthComponent);
    fixture.detectChanges();
    const component = fixture.componentInstance;
    spyOn(component, "sendLoginForm")
    let password = component.formAuth.controls['password'];
    password.setValue('123')
    let username = component.formAuth.controls['username'];
    username.setValue('custom_new_user')
    let button = fixture.debugElement.query(By.css('button'));
    button.triggerEventHandler('click', null);
    expect(component.sendLoginForm).toHaveBeenCalled();
    expect(store.select(getAuth).subscribe(s => !!s)).toBeTruthy();
  });
  it('setToken',  (async () => {
    const fixture = TestBed.createComponent(AuthComponent);
    fixture.detectChanges();
    const component = fixture.componentInstance;
    spyOn(component, 'setToken')
    await component.setToken('token');
    expect(component.setToken).toHaveBeenCalled();
    expect(store.select(getAuth).subscribe(s => !!s)).toBeTruthy();
  }));
});
