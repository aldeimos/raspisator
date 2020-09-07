import {ThunkAction} from 'redux-thunk';
import {RootState} from '../index';

export const GET_USER_TIMETABLES = 'user/get-user-timetables';
export const SET_TIMETABLE_SETTINGS = 'user/set-timetable-settings';
export const HANDLE_ADD_EMPLOYEE_SELECT = 'user/handle-add-employee-select';
export const UPDATE_TIMETABLE = 'user/update-timetable';

export interface UserState {
  timetables: null | object[],
  newTimetable: {
    period: object[]
    staff: object
  },
  addEmployeeSelect: boolean
}

interface GetUserTimetablesAction {
  type: typeof GET_USER_TIMETABLES,
  payload: undefined | object[]
}

interface SetTimetableSettingsAction {
  type: typeof SET_TIMETABLE_SETTINGS,
  uid: string,
}

interface UpdateTimetableCellAction {
  type: typeof UPDATE_TIMETABLE,
  payload: string
}

interface HandleAddEmployeeSelect {
  type: typeof HANDLE_ADD_EMPLOYEE_SELECT,
  payload: boolean
}

export type UserActionTypes = GetUserTimetablesAction | UpdateTimetableCellAction | SetTimetableSettingsAction
            | HandleAddEmployeeSelect;

export type ThunkType = ThunkAction<Promise<void>, RootState, unknown, UserActionTypes>;
