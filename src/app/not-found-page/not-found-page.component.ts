import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-not-found-page',
  templateUrl: './not-found-page.component.html',
  styleUrls: ['./not-found-page.component.css']
})
export class NotFoundPageComponent implements OnInit {
  public way = '';

  constructor(
    public router: Router
  ) { }

  ngOnInit(): void {
    const auth = localStorage.getItem('userData')
    auth ?
      this.way = 'FormBuilder page' :
      this.way = 'Login page'
  }

  navigate(): void{
    this.way === 'FormBuilder page' ?
      this.router.navigate(['/form-builder']) :
      this.router.navigate(['/'])
  }

}
