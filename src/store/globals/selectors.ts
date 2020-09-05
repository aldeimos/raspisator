import {RootState} from '../index';

export const everything = (state: RootState) => state.globalsReducer;
export const token = (state: RootState) => everything(state).authToken;
export const loginData = (state:RootState) => everything(state).login;
export const signinStarted = (state: RootState) => everything(state).signinStarted;
export const signinError = (state:RootState) => everything(state).signinError;
export const signinSuccess = (state: RootState) => everything(state).signinSuccess;
export const errorMessage = (state: RootState) => everything(state).errorMessage;
export const currentUser = (state: RootState) => everything(state).currentUser;
