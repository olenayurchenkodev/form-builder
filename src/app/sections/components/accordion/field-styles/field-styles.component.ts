import { Subscription, takeUntil } from "rxjs";
import { Component } from '@angular/core';

import { SharedDataService } from "src/services/shareElemData.service";
import { BaseClass } from "src/app/base.class";


@Component({
  selector: 'app-accordion-field-styles',
  templateUrl: './field-styles.component.html',
  styleUrls: ['./field-styles.component.scss']
})
export class FieldStylesComponent extends BaseClass{
  public elemData = [];
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

}
