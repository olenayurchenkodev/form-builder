import { Subscription, takeUntil } from "rxjs";
import { Component } from '@angular/core';

import { SharedDataService } from "../../../../services/shareElemData.service";
import { BaseClass } from "../../../base.class";


@Component({
  selector: 'app-accordion-root',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent extends BaseClass{
  public items = ['Form Styles', 'Field Styles'];
  // public expandedIndex = 0;

  public elemData: string[] = [];
  private receiveData: Subscription;

  constructor(
    private sharedDataService:SharedDataService
  ) {
    super();
    this.receiveData = this.sharedDataService.getClickEvent()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe( message => {
        this.elemData = message
      })
  }

  expandedItem(i: number): boolean {
    if (this.elemData.length) return i === 1;
    else return i === 0;
  }
}
