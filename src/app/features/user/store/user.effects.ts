import { Injectable } from "@angular/core";
import { UserService } from "../services/user.http.service";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { switchMap, map, catchError, of } from "rxjs";
import * as UserAction from './user.actions';


@Injectable()
export class UserEffects {
  constructor(private actions$: Actions, private http: UserService) {}

  fetchConversionStatus$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserAction.fetchConversionStatus),
      switchMap((action) =>
        this.http.fetchConversionStatus(action.conversionId).pipe(
          map((response) =>
            UserAction.fetchConversionStatusSuccess({ response })
          ),
          catchError((error) =>
            of(UserAction.fetchConversionStatusError({ error }))
          )
        )
      )
    )
  );

  convertFile$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserAction.convertFile),
      switchMap((action) =>
        this.http.convertFile(action.file).pipe(
          map((payload) => UserAction.convertFileSuccess({ payload })),
          catchError((error) => of(UserAction.convertFileError({ error })))
        )
      )
    )
  );
}
