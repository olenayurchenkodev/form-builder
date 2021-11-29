import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import {Store} from "@ngrx/store";
import {getAuth} from "../store/reducers/form.reducers";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(public store: Store, public router: Router) {}
  canActivate(): boolean {
    if (!this.store.select(getAuth).subscribe(s => s)) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
