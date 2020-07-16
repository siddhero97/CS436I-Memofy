import {LoginResponse} from './actions';

export interface User {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
}

export const WILL_CREATE_USER = 'WILL_CREATE_USER';
export const DID_CREATE_USER = 'DID_CREATE_USER';

export const WILL_LOGIN = 'WILL_LOGIN';
export const LOGIN = 'LOGIN';
export const DID_LOGIN = 'DID_LOGIN';

export const WILL_LOGOUT = 'WILL_LOGOUT';
export const LOGOUT = 'LOGOUT';
export const DID_LOGOUT = 'DID_LOGOUT';

interface LoginAction {
  type: typeof LOGIN;
  payload: LoginResponse;
}

interface LogoutAction {
  type: typeof LOGOUT;
}

interface WillAction {
  type: typeof WILL_LOGIN | typeof WILL_LOGOUT | typeof WILL_CREATE_USER;
}

interface DidAction {
  type: typeof DID_LOGIN | typeof DID_LOGOUT | typeof DID_CREATE_USER;
}

export type UserActionTypes = LoginAction | LogoutAction | WillAction | DidAction;