import {Component} from '@angular/core';
import {SharedDataService} from "../../../../../services/shareElemData.service";
import { Subscription, takeUntil} from "rxjs";
import {BaseClass} from "../../../../base.class";


@Component({
  selector: 'accordion-fieldStyles',
  templateUrl: './fieldStyles.component.html',
  styleUrls: ['./fieldStyles.component.scss']
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
