import {Component, Input, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {getFieldStyle} from "../../../../../../store/reducers/form.reducers";
import {filter, Subject, takeUntil, tap} from "rxjs";
import {map} from "rxjs/operators";

@Component({
  selector: 'textarea-input-card',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss']
})

export class TextareaComponent implements OnInit{
  public styles: { [key: string]: string } | undefined;
  public required: boolean | undefined;
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
