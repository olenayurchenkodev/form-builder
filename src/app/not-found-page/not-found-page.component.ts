import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {EPages} from "../../enums/styles.enum";

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
      this.way = EPages.home :
      this.way = EPages.auth
  }

  navigate(): void{
    this.router.navigate([this.way])
  }

}
