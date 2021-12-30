import {BaseClass} from "../../../../base.class";
import {Directive, Input, OnInit} from "@angular/core";
import {Store} from "@ngrx/store";
import {getFieldStyle} from "../../../../../store/reducers/form.reducers";
import {takeUntil} from "rxjs";
import {map} from "rxjs/operators";

@Directive()
export abstract class ElementsClass extends BaseClass implements OnInit{
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

}
