import {Component, OnInit} from '@angular/core';
import {ElementsClass} from "../elements.class";

@Component({
  selector: 'select-input-card',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})

export class SelectComponent extends ElementsClass implements OnInit{
  ngOnInit(): void {
    this.getFromStore();
  }
}
