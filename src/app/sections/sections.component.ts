import {ComponentPortal, Portal} from '@angular/cdk/portal';
import {Component} from '@angular/core';

@Component({
  selector: 'sections-root',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.scss']
})
export class SectionsComponent {
  selectedPortal?: Portal<any>;
  componentPortal?: ComponentPortal<ComponentPortal<any>>;

  ngAfterViewInit() {
    this.componentPortal = new ComponentPortal(ComponentPortal);
  }
}
