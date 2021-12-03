import { Component } from '@angular/core';

@Component({
  selector: 'accordion-root',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent {

  items = ['Form Styles', 'Field Styles'];
  expandedIndex = 0;

}
