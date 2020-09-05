import {ThunkAction} from 'redux-thunk';
import {RootState} from '../index';

export const GET_USER_TIMETABLES = 'user/get-user-timetables';

export interface UserState {
  timetables: null | object[]
}

interface GetUserProfileAction {
  type: typeof GET_USER_TIMETABLES,
  payload: undefined | object[]
}

export type UserActionTypes = GetUserProfileAction;

export type ThunkType = ThunkAction<Promise<void>, RootState, unknown, UserActionTypes>;
