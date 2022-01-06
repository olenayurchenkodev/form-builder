import {Component, forwardRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NG_VALUE_ACCESSOR } from "@angular/forms";
import { Store } from "@ngrx/store";
import { map } from "rxjs/operators";
import { takeUntil } from "rxjs";

import { getFieldStyle } from "src/store/selectors/form.selectors";
import { BaseClass } from "src/app/base.class";


@Component({
  selector: 'app-elements',
  templateUrl: './elements.component.html',
  styleUrls: ['./elements.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ElementsComponent),
      multi: true
    }
  ]
})
export class ElementsComponent extends BaseClass implements OnInit, OnChanges{
  public selectedClass = '';
  public styles: { [key: string]: string } | undefined;
  public backgroundColor: string = '';
  public required: boolean = false;
  public options = [];

  @Input() type = '';
  @Input() id: string = '';
  @Input() selected: string = '';

  public constructor(
    protected store: Store,
  ) {
    super();
  }

  ngOnInit(): void{
    this.store.select(getFieldStyle(this.id))
      .pipe(
        takeUntil(this.unsubscribe$),
        map(s => {
          if (s) {
            this.styles = s;
            this.backgroundColor = `rgb(${s['backcolour']})`;
            this.styles ? (this.required = s.required): null
            this.styles ? (this.options = s.newOption): null
          }
        })
      )
      .subscribe()
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.selected === this.id) {
      this.selectedClass = 'active';
    } else {
      this.selectedClass = '';
    }
  }

  onChange: any = () => {}
  onTouch: any = () => {}
  set value(val: any){
    this.onChange(val)
    this.onTouch(val)
  }
  writeValue(value: any){
    this.value = value
  }
  registerOnChange(fn: any){
    this.onChange = fn
  }
  registerOnTouched(fn: any){
    this.onTouch = fn
  }

}
