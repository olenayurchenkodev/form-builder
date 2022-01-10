import {TestBed} from '@angular/core/testing';
import { AuthComponent } from "./auth.component";
import {HttpClientTestingModule} from "@angular/common/http/testing";
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
import {NotFoundPageComponent} from "../not-found-page/not-found-page.component";
import {createFeatureSelector, StoreModule} from "@ngrx/store";
import { FormReducer} from "../../store/reducers/form.reducers";

describe('AuthComponent', () => {
  let store: MockStore;
  let router: Router;
  let guard: AuthService;

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
        StoreModule.forRoot({fieldStyles: FormReducer}),
      ],
      declarations: [
        AuthComponent
      ],
      providers: [
        AuthService,
        provideMockStore({}),
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
    let password = component.formAuth.controls['password'];
    password.setValue('password')
    let username = component.formAuth.controls['username'];
    username.setValue('username')
    let pass = component.getErrorMessage('password')
    expect(pass).toEqual('')
  });
  it('getErrorMessageTrue', () => {
    const fixture = TestBed.createComponent(AuthComponent);
    fixture.detectChanges();
    const component = fixture.componentInstance;
    let password = component.formAuth.controls['password'];
    password.setValue('')
    let username = component.formAuth.controls['username'];
    username.setValue('username')
    let pass = component.getErrorMessage('password')
    expect(pass).toEqual('This field is required')
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
    // expect(store.select(getAuth).subscribe(s => !!s)).toBeTruthy();
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
    // expect(store.select(getAuth).subscribe(s => !!s)).toBeTruthy();
  });
  it('setToken',   (async ()=> {
    const selectAuth = createFeatureSelector<{Auth: string}>('fieldStyles');
    const mockAuthState = store.overrideSelector(
      selectAuth,
      {Auth: 'token'}
    );
    const fixture = TestBed.createComponent(AuthComponent);
    fixture.detectChanges();
    spyOn(store, 'dispatch');
    const component = fixture.componentInstance;
    await component.setToken('token');
    let token = '';
    expect(store.dispatch).toHaveBeenCalled()
    await store.select(mockAuthState).subscribe(s => s ? token = s.Auth : null)
    expect(token).toEqual('token');
  }));
});
