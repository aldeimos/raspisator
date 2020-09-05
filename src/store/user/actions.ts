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
