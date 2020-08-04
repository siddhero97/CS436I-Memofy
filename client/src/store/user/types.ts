import {LoginResponse} from './actions';

export interface User {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
}

export const WILL_CREATE_USER = 'WILL_CREATE_USER';
export const DID_CREATE_USER = 'DID_CREATE_USER';

export const WILL_EDIT_USER = 'WILL_EDIT_USER';
export const EDIT_USER = 'EDIT_USER';
export const DID_EDIT_USER = 'DID_EDIT_USER';

export const WILL_LOGIN = 'WILL_LOGIN';
export const LOGIN = 'LOGIN';
export const DID_LOGIN = 'DID_LOGIN';

export const LOGOUT = 'LOGOUT';

interface LoginAction {
  type: typeof LOGIN;
  payload: LoginResponse;
}

interface EditUserAction {
  type: typeof EDIT_USER;
  payload: User;
}

interface LogoutAction {
  type: typeof LOGOUT;
}

interface WillAction {
  type: typeof WILL_LOGIN | typeof WILL_CREATE_USER | typeof WILL_EDIT_USER;
}

interface DidAction {
  type: typeof DID_LOGIN | typeof DID_CREATE_USER | typeof DID_EDIT_USER;
}

export type UserActionTypes = LoginAction | LogoutAction | EditUserAction | WillAction | DidAction;