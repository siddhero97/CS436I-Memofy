import {User, UserActionTypes, LOGOUT, LOGIN} from './types';

export function login(user: User): UserActionTypes {
  return {
    type: LOGIN,
    payload: user,
  };
}

export function logout(): UserActionTypes {
  return {
    type: LOGOUT,
  };
}