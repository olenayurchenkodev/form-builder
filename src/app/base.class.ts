import {Subject} from "rxjs";

export abstract class BaseClass{
  protected unsubscribe$: Subject<void> = new Subject();

  protected constructor(

  ) {
  }

  onDestroy(): void{
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
