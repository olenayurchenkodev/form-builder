import { Component, OnInit} from '@angular/core';
import { ComponentPortal, Portal, TemplatePortal } from '@angular/cdk/portal';

import {SectionsComponent} from "./sections/sections.component";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{

  portalComponents: Portal<any> | undefined;

  ngOnInit(){
    this.portalComponents = new ComponentPortal(SectionsComponent);
  }
}

