import {User, UserActionTypes, LOGOUT, LOGIN, NewUser, REGISTER} from './types';

export function login(user: User): UserActionTypes {
  return {
    type: LOGIN,
    payload: user,
  };
}
export function register(user: NewUser): UserActionTypes {
  return {
    type: REGISTER,
    payload: user,
  };
}

export function logout(): UserActionTypes {
  return {
    type: LOGOUT,
  };
}
