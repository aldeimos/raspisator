import moment from 'moment';
import * as types from './types';

const initialState: types.UserState = {
  timetables: null,
  newTimetable: {
    period: [],
    staff: {}
  },
  newEmployee: {
    email: '',
    name: '',
    password: ''
  },
  staff: [],
  isLoading: false,
  errorMessage: '',
  addEmployeeSelect: false
};

const userReducer = (state = initialState, action: types.UserActionTypes):types.UserState => {
  switch (action.type) {
    case types.GET_USER_TIMETABLES:
      return {
        ...state,
        timetables: !!action.payload ? action.payload : null
      };

    case types.SET_TIMETABLE_SETTINGS:
      let acc: object[] = [];
      Array.from({length: 7}).forEach((v, i) => acc.push(moment(Date.now()).add(i, 'days')));

      const yourself = {
        [action.uid]: {
          name: 'Вы',
          timetable: Array(7).fill(null)
        }
      };
      return {
        ...state,
        newTimetable: {
          ...state.newTimetable,
          period: acc,
          staff: {...yourself}
        }
      };
    case types.GET_STAFF:
      console.log(action.uid);
      return {
        ...state,
        staff: action.payload.filter((employee) => employee.uid !== action.uid)
      };
    case types.SET_NEW_EMPLOYEE:
      return {
        ...state,
        newEmployee: {
          ...state.newEmployee,
          [action.name]: action.value
        }
      };
    case types.ADD_NEW_EMPLOYEE_SUCCESS:
      return {
        ...state,
        newEmployee: {
          email: '',
          password: '',
          name: ''
        }
      };
    case types.ADD_NEW_EMPLOYEE_ERROR:
      return {
        ...state,
        errorMessage: action.errorMessage
      };
    case types.ADD_NEW_EMPLOYEE_STARTED:
      return {
        ...state,
        isLoading: action.flag
      };
    case types.HANDLE_ADD_EMPLOYEE:

      const uniqueId = Math.random().toString(32).substr(2, 12);

      return {
        ...state,
        newTimetable: {
          ...state.newTimetable,
          staff: {[uniqueId]: {name: null, timetable: Array(7).fill(null)}, ...state.newTimetable.staff}
        }
      };
    default: return state;
  }
};

export default userReducer;
