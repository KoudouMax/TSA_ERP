/* eslint-disable import/no-anonymous-default-export */
import {
    LOGIN_USER,
    LOGIN_USER_SUCCESS,
    REGISTER_USER,
    REGISTER_USER_SUCCESS,
    LOGOUT_USER
  } from "../../constants/actionTypes";

type InitialStateType = {
    authData: authDatatType,
    loading: boolean
  }

export type authDatatType = {
    loggedIn: boolean,
    user: userType | null
  }

export type userType = {
    accessToken: string,
    userId: string
  }

  const INIT_STATE: InitialStateType = {
    authData: { loggedIn: false, user: null },
    loading: false
  };

  export default (state = INIT_STATE, action: any) => {
    switch (action.type) {
      case LOGIN_USER:
        return { ...state, loading: true };

      case LOGIN_USER_SUCCESS:
        // notify.success('Login Success');
        return { ...state, loading: false, authData: action.payload };

      case REGISTER_USER:
        return { ...state, loading: true };

      case REGISTER_USER_SUCCESS:
        // notify.success('Register User Success');
        return { ...state, loading: false, authData: action.payload.uid };

      case LOGOUT_USER:
        return { ...state, authData: null };

      default:
        return { ...state };
    }
  };