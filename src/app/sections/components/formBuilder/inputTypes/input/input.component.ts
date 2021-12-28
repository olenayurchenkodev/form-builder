import {Component, Input, OnInit} from '@angular/core';
import {getFieldStyle} from "../../../../../../store/reducers/form.reducers";
import {Store} from "@ngrx/store";
import {Subject, takeUntil} from "rxjs";
import {map} from "rxjs/operators";


@Component({
  selector: 'input-input-card',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent{
  public styles: { [key: string]: string } | undefined;
  public required: boolean | undefined;
  private unsubscribe$: Subject<void> = new Subject();
  @Input() id: string = '';

  constructor(
    private store: Store
  ) {
  }

  ngOnInit(): void{
    this.store.select(getFieldStyle(this.id))
      .pipe(
        takeUntil(this.unsubscribe$),
        map(s => {
          this.styles = s
          this.styles ? (this.required = s.required): null
        })
      )
      .subscribe()
  }

  onDestroy(): void{
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
