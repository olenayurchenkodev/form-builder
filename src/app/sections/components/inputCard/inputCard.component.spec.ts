import { TestBed} from '@angular/core/testing';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import { StoreModule} from "@ngrx/store";
import {RouterModule, Router} from "@angular/router";
import { FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FormReducer} from "../../../../store/reducers/form.reducers";
import {InputCardComponent} from "./inputCard.component";

describe('InputCardComponent', () => {
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
        InputCardComponent
      ],
    }).compileComponents();
    router = TestBed.get(Router);
    router.initialNavigation();
  });
  // it('logout', () => {
  //   const fixture = TestBed.createComponent(InputCardComponent);
  //   const component = fixture.componentInstance;
  //   fixture.detectChanges();
  //   spyOn(component, 'onEditButtonClick');
  //   component.querySelector('button').click()
  //   expect(component.submitForm).toHaveBeenCalledTimes(0);
  // });
});
