import {
  User,
  UserActionTypes,
  LOGOUT,
  LOGIN,
  WILL_LOGIN,
  DID_LOGIN,
  WILL_CREATE_USER,
  DID_CREATE_USER
} from './types';
import {AppThunk} from '..';
import axios from 'axios';

export interface CreateUserResponse {
  user: User;
}

export interface LoginResponse {
  user: User;
  token: string;
}

function willCreateUser(): UserActionTypes {
  return {
    type: WILL_CREATE_USER,
  };
}
function didCreateUser(): UserActionTypes {
  return {
    type: DID_CREATE_USER,
  };
}

function willLogin(): UserActionTypes {
  return {
    type: WILL_LOGIN,
  };
}
function login(data: LoginResponse): UserActionTypes {
  return {
    type: LOGIN,
    payload: data,
  };
}
function didLogin(): UserActionTypes {
  return {
    type: DID_LOGIN,
  };
}

function logout(): UserActionTypes {
  return {
    type: LOGOUT,
  };
}

export const thunkCreateUser = (
  firstName: string,
  lastName: string,
  email: string,
  password: string
): AppThunk => async dispatch => {
  dispatch(willCreateUser());

  await axios.post<CreateUserResponse>('/api/users/signup', {
    firstName,
    lastName,
    email,
    password
  });

  const {data} = await axios.post<LoginResponse>('/api/users/login', {
    email,
    password
  });

  dispatch(login(data));
  dispatch(didCreateUser());
};

export const thunkLogin = (email: string, password: string): AppThunk => async dispatch => {
  dispatch(willLogin());

  const {data} = await axios.post<LoginResponse>('/api/users/login', {
    email,
    password
  });

  dispatch(login(data));
  dispatch(didLogin());
};

export const thunkLogout = (): AppThunk => async dispatch => {
  dispatch(logout());
};