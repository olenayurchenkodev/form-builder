import {TestBed} from '@angular/core/testing';
import {AuthService} from "./authGuard.service";
import {AuthGuard} from "../guards/auth.guard";

describe('AuthGuard', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        AuthService,
        AuthGuard,
      ],
    }).compileComponents();
  });
  // it('canActivate',
  //   inject([AuthGuard],
  //     (service: AuthGuard) => {
  //       expect(service).toBeDefined();
  //
  //     })
  // );
});
