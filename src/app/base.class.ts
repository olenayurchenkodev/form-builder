import { Directive } from "@angular/core";
import { Subject } from "rxjs";


@Directive()
export abstract class BaseClass {
  protected unsubscribe$: Subject<void> = new Subject();

  onDestroy(): void{
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
