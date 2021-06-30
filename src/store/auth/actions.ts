import {
    LOGIN_USER,
    LOGIN_USER_SUCCESS,
    LOGOUT_USER,
    REGISTER_USER,
    REGISTER_USER_SUCCESS
  } from '../../constants/actionTypes';
  
  export const loginUser = (user: any, history: any) => ({
    type: LOGIN_USER,
    payload: { user, history }
  });
  export const loginUserSuccess = (user: any) => ({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });
  
  export const registerUser = (user: any, history: any) => ({
    type: REGISTER_USER,
    payload: { user, history }
  })
  export const registerUserSuccess = (user: any) => ({
    type: REGISTER_USER_SUCCESS,
    payload: user
  })
  
  export const logoutUser = (history: any) => ({
    type: LOGOUT_USER,
    payload : {history}
  });