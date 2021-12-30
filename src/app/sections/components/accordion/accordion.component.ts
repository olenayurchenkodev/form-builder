import { Component } from '@angular/core';

@Component({
  selector: 'app-accordion-root',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent {
  public items = ['Form Styles', 'Field Styles'];
  // public expandedIndex = 0;
}
