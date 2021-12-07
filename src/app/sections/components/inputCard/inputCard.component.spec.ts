import { TestBed} from '@angular/core/testing';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import { StoreModule} from "@ngrx/store";
import {RouterModule, Router} from "@angular/router";
import { FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FormReducer} from "../../../../store/reducers/form.reducers";
import {InputCardComponent} from "./inputCard.component";
import {AuthComponent} from "../../../auth/auth.component";
import {MockStore, provideMockStore} from "@ngrx/store/testing";
import {DragDropModule} from "@angular/cdk/drag-drop";
import {SectionsComponent} from "../../sections.component";

describe('InputCardComponent', () => {
  let store: MockStore;
  let routes: Router;
  const initialState = { isAuth: 'fffffffff' };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        StoreModule.forRoot( {fieldStyles: FormReducer}),
        FormsModule,
        ReactiveFormsModule,
        DragDropModule,
        RouterModule.forRoot([
          { path: 'login', component: AuthComponent},
          { path: 'form-builder', component: SectionsComponent}
        ])
      ],
      declarations: [
        InputCardComponent
      ],
      providers: [
        provideMockStore({ initialState }),
      ]
    }).compileComponents();
    store = TestBed.inject(MockStore);
    routes = TestBed.inject(Router);
  });
  it('logout', ( async() => {
    const fixture = TestBed.createComponent(InputCardComponent);
    const component = fixture.componentInstance;
    spyOn(component, 'logout');
    component.logout();
    fixture.detectChanges();
    expect(component.logout).toHaveBeenCalled();
  }));
});
