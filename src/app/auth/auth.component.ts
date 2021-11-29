import {Component} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {setAuth} from "../../store/actions/form.actions";
import {Store} from "@ngrx/store";
import {getAuth} from "../../store/reducers/form.reducers";
import {Router} from "@angular/router";

@Component({
  selector: 'auth-root',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {

  constructor(
    private http: HttpClient,
    private store: Store,
    public router: Router
  ) { }

  formAuth = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
  })

  sendLoginForm () {
    this.http.post(`http://localhost:3000/login`, (this.formAuth.value))
      .subscribe(token => this.setToken(token))
  }

  sendRegisterForm () {
    this.http.post(`http://localhost:3000/register`, (this.formAuth.value))
      .subscribe(token => this.setToken(token))
  }

  setToken (token: any) {
    this.store.dispatch(setAuth({auth: token}))
    this.store.select(getAuth)
      .subscribe(() =>
        this.router.navigate(['/form-builder']))
  }
}
