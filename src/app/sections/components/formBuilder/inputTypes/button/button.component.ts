import {Component, Input, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {getFieldStyle} from "../../../../../../store/reducers/form.reducers";
import { takeUntil} from "rxjs";
import {map} from "rxjs/operators";
import {BaseClass} from "../../../../../base.class";

@Component({
  selector: 'button-input-card',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})

export class ButtonComponent extends BaseClass implements OnInit{
  public styles: { [key: string]: string } | undefined;
  @Input() id: string = '';

  constructor(
    private store: Store,
  ) {
    super();
  }

  ngOnInit(){
    this.store.select(getFieldStyle(this.id))
      .pipe(
        takeUntil(this.unsubscribe$),
        map(s => {
          this.styles = s
          console.log('t')
        })
      )
      .subscribe()
  }

}
