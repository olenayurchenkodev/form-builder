import {Component, EventEmitter, forwardRef, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import { NG_VALUE_ACCESSOR } from "@angular/forms";
import { Store } from "@ngrx/store";
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
  public styles: { [key: string]: string } = {};
  public backgroundColor: string = '';
  public required: boolean = false;
  public options = [];

  @Input() type = '';
  @Input() id: string = '';
  @Input() selected: string = '';
  @Input() isCompleted: boolean = false;
  @Output() newItemEvent = new EventEmitter<string>();

  public constructor(
    protected store: Store,
  ) {
    super();
  }

  ngOnInit(): void{
    this.store.select(getFieldStyle(this.id))
      .pipe(
        takeUntil(this.unsubscribe$)
      )
      .subscribe(s => {
        if (!this.isCompleted) {
          this.styles = s;
          this.backgroundColor = `rgb(${s['backcolour']})`;
          this.styles ? (this.required = s.required): null
          this.styles ? (this.options = s.newOption): null
        }
      })
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.selected === this.id) {
      this.selectedClass = 'active';
    } else {
      this.selectedClass = '';
    }
  }

  addNewItem(value: string): void {
    this.newItemEvent.emit(value);
  }

  private onChange: (value: string) => void = () => {}
  private onTouch: (val: string) => void = () => {}

  set value(val: string) {
    this.onChange(val)
    this.onTouch(val)
  }

  writeValue(value: string): void {
    this.value = value
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn
  }

  registerOnTouched(fn: () => void): void {
    this.onTouch = fn
  }

}
