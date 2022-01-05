import { CanActivate, Router } from "@angular/router";
import { Injectable } from '@angular/core'


@Injectable()
export class AuthService implements CanActivate {
  auth = localStorage.getItem('userData')
  constructor( public router: Router) {}
  canActivate(): boolean {
    if (!this.auth) {
      this.router.navigate(['/']);
      return false;
    }
    return true;
  }
}
