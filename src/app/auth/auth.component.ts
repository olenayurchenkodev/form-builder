import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { map } from "rxjs/operators";
import { takeUntil } from "rxjs";

import { getAuth } from "../../store/selectors/form.selectors";
import { setAuth } from "../../store/actions/form.actions";
import { EError } from "../../enums/styles.enum";
import { BaseClass } from "../base.class";
import { URL } from "../config";


@Component({
  selector: 'app-auth-root',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent extends BaseClass{
  public hide = true;

  constructor(
    private http: HttpClient,
    private store: Store,
    public router: Router,
    private fb: FormBuilder
  ) {
    super();
    this.formAuth = fb.group({
      'username': ['', Validators.required],
      'password': ['', Validators.required]
    })
  }

  formAuth = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
  })

  getErrorMessage(field: string): string {
      return this.formAuth.get(`${field}`)?.hasError(`required`) ? EError.error : '';
  }

  sendLoginForm(): void {
    this.http.post(`${URL}/login`, (this.formAuth.value))
      .subscribe(token => this.setToken(token))
  }

  sendRegisterForm(): void {
    this.http.post(`${URL}/register`, (this.formAuth.value))
      .subscribe(token => this.setToken(token))
  }

  setToken(token: any): void {
    this.store.dispatch(setAuth({auth: token.token}))
    this.store.select(getAuth)
      .pipe(
        takeUntil(this.unsubscribe$),
        map(token => {
          localStorage.setItem('userData', token);
          this.router.navigate(['/form-builder'])
        })
        )
      .subscribe()
  }

}
