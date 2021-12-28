import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {setAuth, setAuthSuccess} from "../actions/form.actions";
import {catchError, map, mergeMap} from 'rxjs/operators'
import {Observable, of} from "rxjs";
import {Action} from "@ngrx/store";


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
