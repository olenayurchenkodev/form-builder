import {RouterModule, Routes} from "@angular/router";
import {TestBed} from "@angular/core/testing";
import {StoreModule} from "@ngrx/store";
import {FormReducer} from "../../../../store/reducers/form.reducers";
import {FormBuilderComponent} from "./formBuilder.component";

describe('FormBuilderComponent', () => {
  let routes: Routes;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot( {fieldStyles: FormReducer}),
        RouterModule.forRoot(routes)
      ],
      declarations: [
        FormBuilderComponent
      ],
    }).compileComponents();
  });
  it('form-builder component defined', ()=>{
    const fixture = TestBed.createComponent(FormBuilderComponent);
    const component = fixture.componentInstance;
    expect(component).toBeDefined();
  })
});
