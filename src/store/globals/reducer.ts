import {GlobalsState, GlobalsActionTypes} from './types';
import * as types from './types';

const initialState: GlobalsState = {
  authToken: null,
  login: {
    email: '',
    password: '',
  },
  currentUser: null,
  signinSuccess: false,
  signinError: false,
  signinStarted: false,
  errorMessage: null,
};

const globalsReducer = (state = initialState, action: GlobalsActionTypes): GlobalsState => {
  switch (action.type) {
    case types.SIGN_IN_STARTED:
      return {
        ...state,
        signinStarted: action.payload
      };
    case types.SIGN_IN_SUCCESS:
      return {
        ...state,
        signinSuccess: true,
        login: {
          email: '',
          password: ''
        }
      };
    case types.SIGN_IN_ERROR:
      console.log(action);
      return {
        ...state,
        signinError: action.flag,
        errorMessage: action.errorMessage
      };
    case types.SIGN_IN_RESET:
      return {
        ...state,
        signinSuccess: false,
        signinError: false,
        errorMessage: ''
      };
    case types.SIGN_OUT:
      return {
        ...state,
        currentUser: null
      };
    case types.SET_LOGIN_VALUES:
      return {
        ...state,
        login: {
          ...state.login,
          [action.name]: action.value
        }
      };
    case types.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      };
    default: return state;
  }
};

export default globalsReducer;
