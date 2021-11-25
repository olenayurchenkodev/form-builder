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

  sendForm(){
    // console.log(this.formAuth.value)
    this.http.post('http://localhost:3000/register',
      JSON.stringify([this.formAuth.get('username')?.value,
        this.formAuth.get('password')?.value]))
      .subscribe(res => this.getToken(res))
  }

  getToken (res: any) {
    console.log('token!');
  }
}
