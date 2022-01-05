import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap } from 'rxjs/operators';
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Action } from "@ngrx/store";

import { setAuth, setAuthSuccess } from "../actions/form.actions";


@Injectable()
export class AppEffects{
  auth$ = createEffect(()=> this.actions$.pipe(
    ofType(setAuth),
    mergeMap(():Observable<Action> => {
      map((token: string) => setAuthSuccess({auth: token}))
        catchError((err: Error) => of(err))
      return this.auth$
    })
  ))

  constructor (private actions$: Actions) {}
}
