import * as types from './types';
import * as api from '../../api';
import {GlobalsActionTypes, ThunkType} from './types';


export const signInRequest = (requestType: string):ThunkType => {
  return async (dispatch, getState) => {
    const {email, password} = getState().globalsReducer.login;

    try {
      let requestResult;

      dispatch({
        type: types.SIGN_IN_STARTED,
        payload: true
      });

      if (requestType === 'login') {
        requestResult = await api.loginUser(email, password);
      } else {
        requestResult = await api.createUser(email, password);
      }

      dispatch({
        type: types.SIGN_IN_SUCCESS,
      });

      dispatch({
        type: types.SIGN_IN_STARTED,
        payload: false
      });


    } catch (e) {

      dispatch({
        type: types.SIGN_IN_ERROR,
        flag: true,
        errorMessage: e.message,
      });

      dispatch({
        type: types.SIGN_IN_STARTED,
        payload: false
      });

      return e;
    }
  }
};

export const setLoginValues = (name: string, value: string):GlobalsActionTypes => {
  return {
    type: types.SET_LOGIN_VALUES,
    name,
    value
  }
};

export const setSignInError = (flag: boolean, errorMessage:string):GlobalsActionTypes => {
  return {
    type: types.SIGN_IN_ERROR,
    flag,
    errorMessage,
  }
};

export const resetSignUpStatus = () => {
  return {
    type: types.SIGN_IN_RESET,
  }
};

export const setCurrentUser = (user: {uid: string, email: string}) => {

  if (!user) {
    return {
      type: types.SIGN_OUT
    }
  }

  return {
    type: types.SET_CURRENT_USER,
    uid: user.uid,
    email: user.email
  }
};

export const signout = ():ThunkType => {
  return async (dispatch, getState) => {
    await api.signoutUser();

    dispatch({
      type: types.SIGN_OUT
    })
  }
};
