import {RootState} from '../index';

export const everything = (state:RootState) => state.userReducer;
export const timetables = (state:RootState) => everything(state).timetables;
