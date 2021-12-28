import {Component, Input} from '@angular/core';
import {Store} from "@ngrx/store";
import {getFieldStyle} from "../../../../../../store/reducers/form.reducers";
import {Subject, takeUntil} from "rxjs";
import {map} from "rxjs/operators";

@Component({
  selector: 'button-input-card',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})

export class ButtonComponent {
  public styles: { [key: string]: string } | undefined;
  private unsubscribe$: Subject<void> = new Subject<void>();
  @Input() id: string = '';

  constructor(
    private store: Store,
  ) { }

  ngOnInit(){
    this.store.select(getFieldStyle(this.id))
      .pipe(
        takeUntil(this.unsubscribe$),
        map(s => this.styles = s)
      )
      .subscribe()
  }

  onDestroy(): void{
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
