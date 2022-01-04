import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {getFieldStyle} from "../../../../../store/selectors/form.selectors";
import {takeUntil} from "rxjs";
import {map} from "rxjs/operators";
import {BaseClass} from "../../../../base.class";
import {NG_VALUE_ACCESSOR} from "@angular/forms";

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
export class ElementsComponent extends BaseClass implements OnInit{
  @Input() type = '';
  public styles: { [key: string]: string } | undefined;
  public required: boolean = false;
  public options = [];

  @Input() id: string = '';

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
          this.styles = s;
          this.styles ? (this.required = s.required): null
          this.styles ? (this.options = s.newOption): null
        })
      )
      .subscribe()
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
