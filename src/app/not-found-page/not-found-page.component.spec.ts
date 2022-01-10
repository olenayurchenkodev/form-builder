import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFoundPageComponent } from './not-found-page.component';
import {Router, RouterModule} from "@angular/router";
import {AuthComponent} from "../auth/auth.component";
import {SectionsComponent} from "../sections/sections.component";
import {AuthService} from "../../services/authGuard.service";
import {WayDirectionPipe} from "../../pipes/way-direction.pipe";

describe('NotFoundPageComponent', () => {
  let component: NotFoundPageComponent;
  let fixture: ComponentFixture<NotFoundPageComponent>;
  let router = {
    navigate: jasmine.createSpy('navigate')
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotFoundPageComponent, WayDirectionPipe ],
      imports: [
        RouterModule.forRoot([
          {path: '', component: AuthComponent },
          {path: 'not-found', component: NotFoundPageComponent},
          {path: 'form-builder', component: SectionsComponent, canActivate: [AuthService]},
          {path: '**', redirectTo: 'not-found'},
        ]),
      ],
      providers: [{
        provide: Router,
        useValue: router
      }]
    })
    .compileComponents();
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(NotFoundPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('ngOnInitLogin', () => {
    component.auth = null;
    component.ngOnInit();
    expect(component.way).toEqual('/');
  });
  it('ngOnInitFormBuilder', () => {
    component.auth = 'fsfscdcsx';
    component.ngOnInit();
    expect(component.way).toEqual('/form-builder');
  });
  it('navigateLogin', () => {
    component.way = '/';
    component.navigate();
    expect(router.navigate).toHaveBeenCalledWith(['/']);
  });
  it('navigateFormBuilder', () => {
    component.way = '/form-builder';
    component.navigate();
    expect(router.navigate).toHaveBeenCalledWith(['/form-builder']);
  });
});
