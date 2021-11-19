import {Directive, ElementRef, Renderer2} from '@angular/core';

@Directive({
  selector: '[formStyle]'
})
export class CustomFormStyleDirective{

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ){
    this.renderer.setStyle(
      this.elementRef.nativeElement, "color", "#32373B"
    );
  }

}
