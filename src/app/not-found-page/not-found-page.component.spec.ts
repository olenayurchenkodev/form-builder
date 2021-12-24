import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFoundPageComponent } from './not-found-page.component';
import {RouterModule} from "@angular/router";
import {AuthComponent} from "../auth/auth.component";
import {SectionsComponent} from "../sections/sections.component";
import {AuthService} from "../../services/authGuard.service";

describe('NotFoundPageComponent', () => {
  let component: NotFoundPageComponent;
  let fixture: ComponentFixture<NotFoundPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotFoundPageComponent ],
      imports: [
        RouterModule.forRoot([
          {path: '', component: AuthComponent },
          {path: 'not-found', component: NotFoundPageComponent},
          {path: 'form-builder', component: SectionsComponent, canActivate: [AuthService]},
          {path: '**', redirectTo: 'not-found'},
        ]),

      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFoundPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
