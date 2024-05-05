import { Injectable } from '@angular/core';
import { AppState } from '../../../app-state';
import { Store } from '@ngrx/store';
import * as UserAction from '../store/user.actions';
import { Observable } from 'rxjs';
import { Actions, ofType } from '@ngrx/effects';

@Injectable({
  providedIn: 'root',
})
export class UserStoreService {
  constructor(private store: Store<AppState>, private actions$: Actions) {}

  public fetchConversionStatus(conversionId: string): void {
    return this.store.dispatch(
      UserAction.fetchConversionStatus({ conversionId })
    );
  }

  public selectConversionStatus(): Observable<any> {
    return this.store.select((s) => s.userState.status);
  }

  public convertFile(file: File): void {
    this.store.dispatch(UserAction.convertFile({ file }));
  }

  public selectResponseConvert(): Observable<any> {
    return this.store.select((s) => s.userState.link);
  }
}
