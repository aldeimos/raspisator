import * as types from './types';

const initialState: types.UserState = {
  timetables: null
};

const userReducer = (state = initialState, action: types.UserActionTypes):types.UserState => {
  switch (action.type) {
    case types.GET_USER_TIMETABLES:
      console.log(action);
      return {
        ...state,
        timetables: !!action.payload ? action.payload : null
      };
    default: return state;
  }
};

export default userReducer;
