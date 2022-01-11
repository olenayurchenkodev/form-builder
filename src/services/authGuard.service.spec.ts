import {inject, TestBed} from '@angular/core/testing';
import {AuthService} from "./authGuard.service";
import {RouterModule} from "@angular/router";
import {AuthComponent} from "../app/auth/auth.component";
import {NotFoundPageComponent} from "../app/not-found-page/not-found-page.component";
import {SectionsComponent} from "../app/sections/sections.component";

describe('AuthGuard', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        AuthService,
      ],
      imports: [
        RouterModule.forRoot([
          {path: '', component: AuthComponent },
          {path: 'not-found', component: NotFoundPageComponent},
          {path: 'form-builder', component: SectionsComponent, canActivate: [AuthService]},
          {path: '**', redirectTo: 'not-found'},
        ]),
      ]
    }).compileComponents();
  });
  it('isAuthenticated',
    inject([AuthService],
      (service: AuthService) => {
        let res = service.canActivate();
        expect(res).toBe(false);
      })
  );
  it('isAuthenticatedNot',
    inject([AuthService],
      (service: AuthService) => {
      service.auth = 'ddd'
        let res = service.canActivate();
        expect(res).toBe(true);
      })
  );
});
