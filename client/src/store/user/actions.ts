import {UserActionTypes, LOGOUT, LOGIN, WILL_LOGIN, DID_LOGIN, User, WILL_CREATE_USER, DID_CREATE_USER} from './types';
import {AppThunk} from 'store';
import axios from 'axios';
import { thunkFetchFridges } from 'store/fridge/actions';

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

export const thunkCreateUser = (
  firstName: string,
  lastName: string,
  email: string,
  password: string
): AppThunk => async dispatch => {
  dispatch(willCreateUser());

  await axios.post<CreateUserResponse>('http://localhost:4000/users/signup', {
    firstName,
    lastName,
    email,
    password
  });

  const {data} = await axios.post<LoginResponse>('http://localhost:4000/users/login', {
    email,
    password
  });

  dispatch(login(data));
  dispatch(didCreateUser());
};

export const thunkLogin = (email: string, password: string): AppThunk => async dispatch => {
  dispatch(willLogin());

  const {data} = await axios.post<LoginResponse>('http://localhost:4000/users/login', {
    email,
    password
  });
  if ('userError' in data) {
    console.log('error in login')
  }
  else {
    console.log(data)
    dispatch(login(data));
    dispatch(didLogin());
    dispatch(thunkFetchFridges(data.user._id))
  }
};

export function logout(): UserActionTypes {
  return {
    type: LOGOUT,
  };
}