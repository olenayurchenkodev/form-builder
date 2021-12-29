import {Component,OnInit} from '@angular/core';
import {ElementsClass} from "../elements.class";

@Component({
  selector: 'button-input-card',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})

export class ButtonComponent extends ElementsClass implements OnInit{
  ngOnInit() {
    this.getFromStore();
  }
}
