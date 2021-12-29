import {Component, ElementRef, forwardRef, HostListener, Inject, Input, OnInit, Renderer2} from '@angular/core';
import {Store} from "@ngrx/store";
import {getFieldStyle} from "../../../../../../store/reducers/form.reducers";
import {takeUntil} from "rxjs";
import {map} from "rxjs/operators";
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR} from "@angular/forms";
import {BaseClass} from "../../../../../base.class";

@Component({
  selector: 'textarea-input-card',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TextareaComponent),
    multi: true,
  }],
})

export class TextareaComponent extends BaseClass implements OnInit, ControlValueAccessor{
  public styles: { [key: string]: string } | undefined;
  public required: boolean | undefined;
  public value = '';
  private onChange = () => {};
  private onTouched = () => {};
  @Input() id: string = '';
  @Input() create = false;

  constructor(
    private store: Store,
    @Inject(ElementRef) private readonly elementRef: ElementRef,
    @Inject(Renderer2) private readonly renderer: Renderer2,
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

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => {}): void {
    this.onTouched = fn;
  }

  // writeValue(outsideValue: string): void {
  //   // console.log(outsideValue);
  //   this.value = outsideValue;
  // }

  updateValue(insideValue: string): void {
    // console.log(insideValue);
    this.value = insideValue; // html
    this.onChange(insideValue); // уведомить Forms API
    this.onTouched();
  }

  @HostListener('input')
  onInput() {
    this.writeValue('d')
  }

  writeValue(value: string) {
    this.value = value
    // console.log(this.value)
  }

}
