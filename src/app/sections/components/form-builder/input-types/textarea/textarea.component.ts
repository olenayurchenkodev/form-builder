import {Component, ElementRef, forwardRef, HostListener, Inject, Input, OnInit, Renderer2} from '@angular/core';
import {Store} from "@ngrx/store";
import {ControlValueAccessor,  NG_VALUE_ACCESSOR} from "@angular/forms";
import {ElementsClass} from "../elements.class";

@Component({
  selector: 'app-textarea-input-card',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TextareaComponent),
    multi: true,
  }],
})

export class TextareaComponent extends ElementsClass implements OnInit, ControlValueAccessor{
  public value = '';
  private onChange = (value: any) => {};
  private onTouched = () => {};
  @Input() create = false;

  constructor(
    @Inject(ElementRef) private readonly elementRef: ElementRef,
    @Inject(Renderer2) private readonly renderer: Renderer2,
    store: Store,
  ) {
    super(store);
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => {}): void {
    this.onTouched = fn;
  }

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
