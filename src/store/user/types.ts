import {ThunkAction} from 'redux-thunk';
import {RootState} from '../index';

export const GET_USER_TIMETABLES = 'user/get-user-timetables';
export const SET_TIMETABLE_SETTINGS = 'user/set-timetable-settings';
export const UPDATE_TIMETABLE = 'user/update-timetable';

export const SET_NEW_EMPLOYEE = 'user/set-new-employee';
export const ADD_NEW_EMPLOYEE_STARTED = 'user/add-new-employee-started';
export const ADD_NEW_EMPLOYEE_SUCCESS = 'user/add-new-employee-success';
export const ADD_NEW_EMPLOYEE_ERROR = 'user/add-new-employee-error';
export const HANDLE_ADD_EMPLOYEE_SELECT = 'user/handle-add-employee-select';

export interface UserState {
  timetables: null | object[],
  newTimetable: {
    period: object[]
    staff: object
  },
  newEmployee: {
    email: string,
    name: string,
    password: string
  },
  isLoading: boolean,
  errorMessage: string,
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

interface HandleAddEmployeeSelectAction {
  type: typeof HANDLE_ADD_EMPLOYEE_SELECT,
  payload: boolean
}

interface SetNewEmployeeAction {
  type: typeof SET_NEW_EMPLOYEE,
  name: string,
  value: string,
}

interface AddNewEmployeeStartedAction {
  type: typeof ADD_NEW_EMPLOYEE_STARTED,
  flag: boolean
}

interface AddNewEmployeeSuccessAction {
  type: typeof ADD_NEW_EMPLOYEE_SUCCESS
}

interface AddNewEmployeeErrorAction {
  type: typeof ADD_NEW_EMPLOYEE_ERROR,
  errorMessage: string
}

export type UserActionTypes = GetUserTimetablesAction | UpdateTimetableCellAction | SetTimetableSettingsAction
            | HandleAddEmployeeSelectAction | SetNewEmployeeAction | AddNewEmployeeStartedAction
            | AddNewEmployeeSuccessAction | AddNewEmployeeErrorAction;

export type ThunkType = ThunkAction<Promise<void>, RootState, unknown, UserActionTypes>;
