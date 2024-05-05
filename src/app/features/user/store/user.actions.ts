import { createAction, props } from '@ngrx/store';

export const convertFile = createAction(
  '[User] Convert File',
  props<{ file: File }>()
);
export const convertFileSuccess = createAction(
  '[User] Convert File Success',
  props<{ payload: any }>()
);
export const convertFileError = createAction(
  '[User] Convert File Error',
  props<{ error: Error }>()
);

export const fetchConversionStatus = createAction(
  '[User] Fetch Conversion Status',
  props<{ conversionId: string }>()
);
export const fetchConversionStatusSuccess = createAction(
  '[User] Fetch Conversion Status Success',
  props<{ response: any }>()
);

export const fetchConversionStatusError = createAction(
  '[User] Fetch Conversion Status Error',
  props<{ error: Error }>()
);

