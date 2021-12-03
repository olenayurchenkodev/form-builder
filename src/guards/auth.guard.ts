import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import {Store} from "@ngrx/store";
import {getAuth} from "../store/reducers/form.reducers";

@Injectable()
export class AuthGuard implements CanActivate {
  isAuth = false;
  constructor(public store: Store, public router: Router) {}
  canActivate(): boolean {
    this.store.select(getAuth).subscribe(s => this.isAuth = !!s)
    console.log(this.isAuth)
    if(this.isAuth){
      this.router.navigate(['/form-builder'])
    }
    return this.isAuth
  }
}
