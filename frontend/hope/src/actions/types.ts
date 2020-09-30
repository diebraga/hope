export const SET_ALERT = 'SET_ALERT';
export const REMOVE_ALERT = 'REMOVE_ALERT';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAIL = 'SIGNUP_FAIL';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const LOGOUT = 'LOGOUT';

export interface SetAlertAction {
  type: typeof SET_ALERT;
  msg: string;
  alertType: string;
}

export interface RemoveAlertAction {
  type: typeof REMOVE_ALERT;
}

export interface SignupSuccessAction {
  type: typeof SIGNUP_SUCCESS;
}

export interface SignupFailAction {
  type: typeof SIGNUP_FAIL;
}

export interface LoginSuccessAction {
  type: typeof LOGIN_SUCCESS;
  email: string;
  password: string;
}

export interface LoginFailAction {
  type: typeof LOGIN_FAIL;
}

export interface LogoutAction {
  type: typeof LOGOUT;
}

export type AuthActionType = LoginSuccessAction;

export type ActionApp = AuthActionType;
