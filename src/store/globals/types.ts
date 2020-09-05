import {ThunkAction} from 'redux-thunk';
import {RootState} from '../index';

export const SIGN_IN_STARTED = 'globals/sign-in-started';
export const SIGN_IN_SUCCESS = 'globals/sign-in-success';
export const SIGN_IN_ERROR = 'globals/sign-in-error';
export const SIGN_IN_RESET = 'globals/sign-in-reset';
export const SET_LOGIN_VALUES = 'globals/set-login-value';
export const SET_CURRENT_USER = 'globals/set-current-user';

export const SIGN_OUT = 'globals/sign-out';

export interface GlobalsState {
  authToken: null | string,
  login: {
    email: string,
    password: string
  },
  currentUser: null | object,
  signinSuccess: boolean,
  signinError: boolean,
  signinStarted: boolean,
  errorMessage: null | string
}

interface SignInRequestStarted {
  type: typeof SIGN_IN_STARTED,
  payload: boolean,
}

interface SignInRequestSuccess {
  type: typeof SIGN_IN_SUCCESS,
}

interface SignInRequestError {
  type: typeof SIGN_IN_ERROR,
  flag: boolean,
  errorMessage: null | string
}

interface SignInReset {
  type: typeof SIGN_IN_RESET
}

interface SetLoginValuesAction {
  type: typeof SET_LOGIN_VALUES,
  name: string,
  value: string,
}

interface SignOutAction {
  type: typeof SIGN_OUT
}

interface SetCurrentUserAction {
  type: typeof SET_CURRENT_USER
  payload: object
}

export type GlobalsActionTypes = SetLoginValuesAction | SignOutAction | SignInRequestSuccess
  | SignInRequestError | SignInRequestStarted
  | SignInReset | SetCurrentUserAction;

export type ThunkType = ThunkAction<Promise<void>, RootState, unknown, GlobalsActionTypes>;


