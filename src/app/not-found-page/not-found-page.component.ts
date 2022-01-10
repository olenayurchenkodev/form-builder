import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { EPages } from "../../enums/styles.enum";


@Component({
  selector: 'app-not-found-page',
  templateUrl: './not-found-page.component.html',
  styleUrls: ['./not-found-page.component.scss']
})
export class NotFoundPageComponent implements OnInit {
  public way: string = EPages.auth;
  public auth: string | null = localStorage.getItem('userData')

  constructor(
    public router: Router
  ) { }

  ngOnInit(): void {
    this.auth ?
      this.way = EPages.home :
      this.way = EPages.auth
  }

  navigate(): void{
    this.router.navigate([this.way])
  }

}
