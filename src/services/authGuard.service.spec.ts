import {inject, TestBed} from '@angular/core/testing';
import {AuthService} from "./authGuard.service";
import {AuthGuard} from "../guards/auth.guard";

describe('AuthGuard', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        AuthService,
      ],
    }).compileComponents();
  });
  it('isAuthenticated',
    inject([AuthService],
      (service: AuthService) => {
        let res = service.isAuthenticated();
        expect(res).toBeDefined();
      })
  );
});
