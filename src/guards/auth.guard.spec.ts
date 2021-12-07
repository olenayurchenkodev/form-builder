import { TestBed} from '@angular/core/testing';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import { StoreModule} from "@ngrx/store";
import {FormReducer} from "../store/reducers/form.reducers";
import {AuthGuard} from "./auth.guard";
import {MockStore, provideMockStore} from "@ngrx/store/testing";

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let store: StoreModule;
  const initialState = { isAuth: false };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        StoreModule.forRoot( {fieldStyles: FormReducer}),
      ],
      declarations: [
        AuthGuard
      ],
      providers: [
        AuthGuard,
        provideMockStore({ initialState })
      ]
    }).compileComponents();
    store = TestBed.inject(MockStore);
    guard = TestBed.inject(AuthGuard);
  });
});
