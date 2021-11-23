import { Component, OnInit} from '@angular/core';
import { ComponentPortal, Portal } from '@angular/cdk/portal';

import {SectionsComponent} from "./sections/sections.component";
import {AuthComponent} from "./auth/auth.component";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  isAuth = false;

  portalComponents: Portal<any> | undefined;

  ngOnInit(){
    if(this.isAuth){
      this.portalComponents = new ComponentPortal(SectionsComponent);
    }
    else{this.portalComponents = new ComponentPortal(AuthComponent);}
  }
}

