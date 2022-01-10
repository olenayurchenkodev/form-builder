import {ComponentFixture, TestBed} from '@angular/core/testing';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import { RouterModule, Router} from "@angular/router";
import { FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AuthService} from '../../services/authGuard.service'
import {MockStore, provideMockStore} from "@ngrx/store/testing";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {BrowserModule} from "@angular/platform-browser";
import {MatSelectModule} from "@angular/material/select";
import {MatIconModule} from "@angular/material/icon";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NotFoundPageComponent} from "../not-found-page/not-found-page.component";
import {StoreModule} from "@ngrx/store";
import {FormReducer} from "../../store/reducers/form.reducers";
import {SectionsComponent} from "./sections.component";
import {AuthComponent} from "../auth/auth.component";
import {PortalModule} from "@angular/cdk/portal";
import {AccordionModule} from "./components/accordion/accordion.module";
import {InputCardModule} from "./components/input-card/input-card.module";
import {FormBuilderModule} from "./components/form-builder/form-builder.module";
import {MatGridListModule} from "@angular/material/grid-list";

describe('SectionsComponent', () => {
  let fixture: ComponentFixture<SectionsComponent>;
  let component: SectionsComponent;
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
        BrowserModule,
        PortalModule,
        AccordionModule,
        InputCardModule,
        FormBuilderModule,
        MatGridListModule
      ],
      declarations: [
        SectionsComponent
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
  beforeEach(() => {
    fixture = TestBed.createComponent(SectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('AfterViewInit', (async () => {
    expect(component.accordionPortal).toBeDefined();
    expect(component.formBuilderPortal).toBeDefined();
    expect(component.inputPortal).toBeDefined();
  }));
  it('AfterViewInit', (async () => {
    expect(component.accordionPortal).toBeDefined();
    expect(component.formBuilderPortal).toBeDefined();
    expect(component.inputPortal).toBeDefined();
  }));
});
