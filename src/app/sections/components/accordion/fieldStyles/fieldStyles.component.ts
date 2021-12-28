import {Component} from '@angular/core';
import {SharedDataService} from "../../../../../services/shareElemData.service";
import {Subject, Subscription, takeUntil} from "rxjs";


@Component({
  selector: 'accordion-fieldStyles',
  templateUrl: './fieldStyles.component.html',
  styleUrls: ['./fieldStyles.component.scss']
})
export class FieldStylesComponent{
  public elemData = [];
  private receiveData: Subscription;
  private unsubscribe$ = new Subject<void>();

  constructor(
    private sharedDataService:SharedDataService
  ) {
    this.receiveData = this.sharedDataService.getClickEvent()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe( message => {
        this.elemData = message
      })
  }

  onDestroy(): void{
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
