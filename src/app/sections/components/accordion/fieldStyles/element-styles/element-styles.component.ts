import {Component, Input} from '@angular/core';
import {ElementsStylesClass} from "./elements-styles.class";

@Component({
  selector: 'app-element-styles',
  templateUrl: './element-styles.component.html',
  styleUrls: ['./element-styles.component.scss']
})
export class ElementStylesComponent extends ElementsStylesClass {
  @Input() type: string = '';
}
