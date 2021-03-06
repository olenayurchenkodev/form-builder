import { Injectable } from '@angular/core'
import {CanActivate, Router} from "@angular/router";


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
