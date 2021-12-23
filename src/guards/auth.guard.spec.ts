import {inject, TestBed} from '@angular/core/testing';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import { StoreModule} from "@ngrx/store";
import {FormReducer} from "../store/reducers/form.reducers";
import {AuthGuard} from "./auth.guard";
import {MockStore, provideMockStore} from "@ngrx/store/testing";
import {RouterModule} from "@angular/router";
import {AuthComponent} from "../app/auth/auth.component";
import {SectionsComponent} from "../app/sections/sections.component";
import {RouterTestingModule} from "@angular/router/testing";

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let store: StoreModule;
  const initialState = { Auth: 'sdddsdssds' };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        StoreModule.forRoot( {fieldStyles: FormReducer}),
        RouterModule.forRoot([
          { path: '', component: AuthComponent, pathMatch: 'full' },
          { path: 'login', component: AuthComponent},
          { path: 'form-builder', component: SectionsComponent},
          { path: '**', redirectTo: '' }
        ]),
        RouterTestingModule
      ],
      providers: [
        AuthGuard,
        provideMockStore({ initialState })
      ]
    }).compileComponents();
    store = TestBed.inject(MockStore);
    guard = TestBed.inject(AuthGuard);
  });
  it('canActivate',
    inject([AuthGuard],
      (service: AuthGuard) => {
      let res = service.canActivate();
      expect(res).toBeDefined();
      })
  );
});
