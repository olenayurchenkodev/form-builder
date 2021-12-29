import {Component, Input, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {getFieldStyle} from "../../../../../../store/reducers/form.reducers";
import { takeUntil} from "rxjs";
import {map} from "rxjs/operators";
import {BaseClass} from "../../../../../base.class";

@Component({
  selector: 'checkbox-input-card',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})

export class CheckboxComponent extends BaseClass implements OnInit{
  public styles: { [key: string]: string } | undefined;
  public required: boolean | undefined;
  public options = [];
  @Input() id: any = null;

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
          this.styles = s;
          if (this.styles) {
            this.required = s.required;
            this.options = s.newOption;
          }
        })
      )
      .subscribe()
  }

}
