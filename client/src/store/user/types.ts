export interface User {
  email: string;
}

export interface NewUser {
  email: string;
  password: string;
  items: [];
}
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const REGISTER = 'REGISTER';

interface LoginAction {
  type: typeof LOGIN;
  payload: User;
}

interface LogoutAction {
  type: typeof LOGOUT;
}

interface RegisterAction {
  type: typeof REGISTER;
  payload: NewUser
}
export type UserActionTypes = LoginAction | LogoutAction | RegisterAction;