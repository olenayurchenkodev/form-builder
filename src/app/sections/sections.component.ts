import {CdkPortalOutlet, ComponentPortal, Portal} from '@angular/cdk/portal';
import {Component, ElementRef, ViewChild} from '@angular/core';

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
