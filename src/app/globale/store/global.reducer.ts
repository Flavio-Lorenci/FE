import { createReducer, on } from '@ngrx/store';
export interface GlobalState {
  loading: boolean;
  error: Error | null;
}

const initialState: GlobalState = {
  loading: false,
  error: null,
};

export const globalReducer = createReducer(initialState);
