import { Injectable } from '@angular/core'


@Injectable()
export class AuthService {
  public isAuthenticated(): boolean {
    const token = localStorage.getItem('userData');
    console.log(token);
    // Check whether the token is expired and return
    // true or false
    return !token;
  }
}
