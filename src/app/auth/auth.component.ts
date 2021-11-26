import {Component} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'auth-root',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {

  constructor( private http: HttpClient ) { }

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
    localStorage.setItem('userData', JSON.stringify({
      token: token
    }))
  }
}
