import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { GlobalService } from '../services/global-http.service';
import * as GlobalActions from './global.actions';
@Injectable()
export class GlobalEffects {
  constructor(private actions$: Actions, private http: GlobalService) {}
}
