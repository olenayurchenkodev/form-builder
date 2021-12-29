import {Component, Input, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {getFieldStyle} from "../../../../../../store/reducers/form.reducers";
import { takeUntil} from "rxjs";
import {map} from "rxjs/operators";
import {BaseClass} from "../../../../../base.class";

@Component({
  selector: 'select-input-card',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})

export class SelectComponent extends BaseClass implements OnInit{
  public styles: { [key: string]: string } | undefined;
  public required: boolean = false;
  public options = [];

  @Input() id: string = '';

  constructor(
    private store: Store,
  ) {
    super();
  }

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

}
