import {Subject} from "rxjs";
import {Directive} from "@angular/core";

@Directive()
export abstract class BaseClass {
  protected unsubscribe$: Subject<void> = new Subject();

  onDestroy(): void{
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
