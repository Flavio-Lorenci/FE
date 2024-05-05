import { createReducer, on } from '@ngrx/store';
import * as UserAction from './user.actions';

export interface UserState {
  link: string;
  status: any;
  loading: boolean;
  error: Error | null;
}

const initialState: UserState = {
  link: '',
  status: '',
  loading: false,
  error: null,
};

export const userReducer = createReducer(
  initialState,
  //  Convert File
  on(UserAction.convertFile, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(UserAction.convertFileSuccess, (state, { payload }) => ({
    ...state,
    link: payload.data.id,
    loading: false,
    error: null,
  })),
  on(UserAction.convertFileError, (state) => ({
    ...state,
    loading: false,
    error: null,
  })),
  //  Fetch Conversion Status
  on(UserAction.fetchConversionStatus, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(UserAction.fetchConversionStatusSuccess, (state, { response }) => ({
    ...state,
    status: response.data,
    loading: false,
    error: null,
  })),
  on(UserAction.fetchConversionStatusError, (state) => ({
    ...state,
    loading: false,
    error: null,
  }))
);
