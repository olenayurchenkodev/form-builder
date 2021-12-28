import {Component, Input, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {getFieldStyle} from "../../../../../../store/reducers/form.reducers";
import {filter, Subject, takeUntil, tap} from "rxjs";
import {map} from "rxjs/operators";

@Component({
  selector: 'checkbox-input-card',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})

export class CheckboxComponent implements OnInit{
  public styles: { [key: string]: string } | undefined;
  public required: boolean | undefined;
  public options = [];
  private unsubscribe$: Subject<void> = new Subject<void>();
  @Input() id: any = null;

  constructor(
    private store: Store,
  ) { }

  ngOnInit(){
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
