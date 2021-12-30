import {TemplatePortal} from '@angular/cdk/portal';
import {AfterViewInit, ChangeDetectorRef, Component, TemplateRef, ViewChild, ViewContainerRef} from '@angular/core';

@Component({
  selector: 'app-sections-root',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.scss']
})
export class SectionsComponent implements AfterViewInit{
  public accordionPortal: TemplatePortal | undefined;
  public formBuilderPortal: TemplatePortal | undefined;
  public inputPortal: TemplatePortal | undefined;
  @ViewChild('accordionPortalContent') accordionPortalContent?: TemplateRef<unknown>;
  @ViewChild('formBuilderPortalContent') formBuilderPortalContent?: TemplateRef<unknown>;
  @ViewChild('inputPortalContent') inputPortalContent?: TemplateRef<unknown>;

  constructor(
    private _viewContainerRef: ViewContainerRef,
    private cdr: ChangeDetectorRef
  ) { }

  ngAfterViewInit(): void{
    if (this.accordionPortalContent && this.formBuilderPortalContent && this.inputPortalContent) {
      this.accordionPortal = new TemplatePortal(this.accordionPortalContent, this._viewContainerRef);
      this.formBuilderPortal = new TemplatePortal(this.formBuilderPortalContent, this._viewContainerRef);
      this.inputPortal = new TemplatePortal(this.inputPortalContent, this._viewContainerRef);
    }
    this.cdr.detectChanges();
  }

}
