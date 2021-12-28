import {Component, Input, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {getFieldStyle} from "../../../../../../store/reducers/form.reducers";
import {filter, Subject, take, takeUntil, tap} from "rxjs";
import {map} from "rxjs/operators";

@Component({
  selector: 'select-input-card',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})

export class SelectComponent implements OnInit{
  public styles: { [key: string]: string } | undefined;
  public required: boolean = false;
  public options = [];
  private unsubscribe$: Subject<void> = new Subject();

  @Input() id: string = '';

  constructor(
    private store: Store,
  ) { }

  ngOnInit(): void{
    this.store.select(getFieldStyle(this.id))
      .pipe(
        takeUntil(this.unsubscribe$),
        map(s => {
          this.styles = s;
          if (this.styles) {
          this.required = s.required;
          this.options = s.newOption;
          }
        })
        )
      .subscribe()
  }

  onDestroy(): void{
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
