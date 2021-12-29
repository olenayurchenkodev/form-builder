import {Component, Input, OnInit} from '@angular/core';
import {getFieldStyle} from "../../../../../../store/reducers/form.reducers";
import {Store} from "@ngrx/store";
import { takeUntil} from "rxjs";
import {map} from "rxjs/operators";
import {BaseClass} from "../../../../../base.class";


@Component({
  selector: 'input-input-card',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent extends BaseClass implements OnInit{
  public styles: { [key: string]: string } | undefined;
  public required: boolean | undefined;
  @Input() id: string = '';

  constructor(
    private store: Store
  ) {
    super();
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
}
