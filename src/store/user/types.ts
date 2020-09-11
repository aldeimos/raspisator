import {RootState} from '../index';
import {ThunkAction} from 'redux-thunk';
import {DocumentData} from '@firebase/firestore-types';

export const GET_USER_TIMETABLES = 'user/get-user-timetables';
export const SET_TIMETABLE_SETTINGS = 'user/set-timetable-settings';
export const UPDATE_TIMETABLE = 'user/update-timetable';

export const GET_STAFF = 'user/get-staff';
export const SET_NEW_EMPLOYEE = 'user/set-new-employee';
export const ADD_NEW_EMPLOYEE_STARTED = 'user/add-new-employee-started';
export const ADD_NEW_EMPLOYEE_SUCCESS = 'user/add-new-employee-success';
export const ADD_NEW_EMPLOYEE_ERROR = 'user/add-new-employee-error';
export const HANDLE_ADD_EMPLOYEE = 'user/handle-add-employee';

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
  staff: {name: string}[] | DocumentData[];
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

interface HandleAddEmployeeAction {
  type: typeof HANDLE_ADD_EMPLOYEE,
}

interface GetStaffAction {
  type: typeof GET_STAFF,
  uid: string,
  payload: { uid: string }[] | DocumentData[]
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
            | HandleAddEmployeeAction | GetStaffAction | SetNewEmployeeAction | AddNewEmployeeStartedAction
            | AddNewEmployeeSuccessAction | AddNewEmployeeErrorAction;

export type ThunkType = ThunkAction<Promise<void>, RootState, unknown, UserActionTypes>;
