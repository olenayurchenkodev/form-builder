import {TemplatePortal} from '@angular/cdk/portal';
import {ChangeDetectorRef, Component, TemplateRef, ViewChild, ViewContainerRef} from '@angular/core';

@Component({
  selector: 'app-sections-root',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.scss']
})
export class SectionsComponent {
  constructor(
    private _viewContainerRef: ViewContainerRef,
    private cdr: ChangeDetectorRef
  ) {
  }

  accordionPortal?: TemplatePortal;
  @ViewChild('accordionPortalContent') accordionPortalContent?: TemplateRef<unknown>;

  formBuilderPortal?: TemplatePortal;
  @ViewChild('formBuilderPortalContent') formBuilderPortalContent?: TemplateRef<unknown>;

  inputPortal?: TemplatePortal;
  @ViewChild('inputPortalContent') inputPortalContent?: TemplateRef<unknown>;

  ngAfterViewInit() {
    if (this.accordionPortalContent && this.formBuilderPortalContent && this.inputPortalContent) {
      this.accordionPortal = new TemplatePortal(this.accordionPortalContent, this._viewContainerRef);
      this.formBuilderPortal = new TemplatePortal(this.formBuilderPortalContent, this._viewContainerRef);
      this.inputPortal = new TemplatePortal(this.inputPortalContent, this._viewContainerRef);
    }
    this.cdr.detectChanges();
  }


}
