import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
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
  hide = true;

  constructor(
    private http: HttpClient,
    private store: Store,
    public router: Router,
    private fb: FormBuilder
  ) {
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
    return this.formAuth.get(`${field}`)?.hasError(`required`) ? 'This field is required' : '';
  }

  sendLoginForm(): void {
    this.http.post(`http://localhost:3000/login`, (this.formAuth.value))
      .subscribe(token => this.setToken(token))
  }

  sendRegisterForm(): void {
    this.http.post(`http://localhost:3000/register`, (this.formAuth.value))
      .subscribe(token => this.setToken(token))
  }

  setToken(token: any): void {
    // console.log(token);
    this.store.dispatch(setAuth({auth: token.token}))
    this.store.select(getAuth)
      .subscribe(token => {
        localStorage.setItem('userData', token);
        this.router.navigate(['/form-builder'])
      })
  }
}
