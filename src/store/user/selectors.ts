import {RootState} from '../index';

export const everything = (state:RootState) => state.userReducer;
export const timetables = (state:RootState) => everything(state).timetables;
export const newTimetable = (state:RootState) => everything(state).newTimetable;
export const addEmployeeSelect = (state:RootState) => everything(state).addEmployeeSelect;
export const newEmployee = (state: RootState) => everything(state).newEmployee;
export const errorMessage = (state: RootState) => everything(state).errorMessage;
export const isLoading = (state: RootState) => everything(state).isLoading;
