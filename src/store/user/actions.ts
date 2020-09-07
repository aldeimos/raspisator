import * as types from './types';
import * as api from '../../api';
import { UserActionTypes, ThunkType } from './types';

export const getUserSchedules = (uid: string):ThunkType => {
  return async (dispatch, getState) => {

    try {
      const requestResult = await api.getUserSchedules(uid);

      const userData = requestResult.data();

      if (userData) {
        dispatch({
          type: types.GET_USER_TIMETABLES,
          payload: userData.time_tables
        });
      }

    } catch (e) {
      console.log(e);
    }
  }
};

export const setTimetableSettings = () => {
  return (dispatch: (arg0: object) => object, getState: () => {globalsReducer: {currentUser: {uid: string}}}) => {
    const uid = getState().globalsReducer.currentUser.uid;
    dispatch({
      type: types.SET_TIMETABLE_SETTINGS,
      uid,
    })
  }
};

export const handleAddEmployeeSelect = (payload: boolean) => {
  return {
    type: types.HANDLE_ADD_EMPLOYEE_SELECT,
    payload
  }
};
