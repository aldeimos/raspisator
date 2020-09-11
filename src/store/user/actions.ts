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

export const setNewEmployee = (name: string, value: string) => {
  return {
    type: types.SET_NEW_EMPLOYEE,
    name,
    value
  }
};

export const addNewEmployee = ():ThunkType => {
  return async (dispatch, getState) => {
    const newEmployee = getState().userReducer.newEmployee;

    try {

      dispatch({
        type: types.ADD_NEW_EMPLOYEE_STARTED,
        flag: true
      });

      await api.addEmployee(newEmployee);

      dispatch({
        type: types.ADD_NEW_EMPLOYEE_SUCCESS,
      });

      dispatch({
        type: types.ADD_NEW_EMPLOYEE_STARTED,
        flag: false
      });

    } catch (e) {

      dispatch({
        type: types.ADD_NEW_EMPLOYEE_ERROR,
        errorMessage: e.message
      });

      dispatch({
        type: types.ADD_NEW_EMPLOYEE_STARTED,
        flag: false
      });

    }
  }
};

export const getStaff = ():ThunkType => {
  return async (dispatch, getState) => {
    try {
      const currentUser = getState().globalsReducer.currentUser;
      const result = await api.getStaffList();

      if (currentUser && result) {
        dispatch({
          type: types.GET_STAFF,
          uid: currentUser.uid,
          payload: result.docs.map(item => item.data())
        })
      }

    } catch (e) {
      console.log(e)
    }
  }
};

export const handleAddEmployee = () => {
  return {
    type: types.HANDLE_ADD_EMPLOYEE,
  }
};
