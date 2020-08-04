import {
  User,
  UserActionTypes,
  LOGOUT,
  LOGIN,
  WILL_LOGIN,
  DID_LOGIN,
  WILL_CREATE_USER,
  DID_CREATE_USER,
  WILL_EDIT_USER,
  EDIT_USER,
  DID_EDIT_USER,

} from './types';
import {AppThunk} from '..';
import axios from 'axios';
import {selectToken} from 'store/app/selectors';
import {thunkFetchFeedAlerts} from 'store/feedAlert/actions';

export interface CreateUserResponse {
  user: User;
}

export interface LoginResponse {
  user: User;
  token: string;
}

export interface EditUserResponse {
  user: User;
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

function willEditUser(): UserActionTypes {
  return {
    type: WILL_EDIT_USER
  }
}

function editUser(user: User): UserActionTypes {
  return {
    type: EDIT_USER,
    payload: user
  }
}

function didEditUser(): UserActionTypes {
  return {
    type: DID_EDIT_USER,
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

export const thunkEditUser = (updatedUser: Partial<User>): AppThunk => async (dispatch, getState) => {
  dispatch(willEditUser());

  const token = selectToken(getState()); 

  const {data: {user}} = await axios.put<EditUserResponse>('api/users/edit', 
  updatedUser,
    {
      params: {
        token
      }
    }
  );
 
  dispatch(editUser(user));
  dispatch(thunkFetchFeedAlerts(updatedUser.feedAlertIds))
  dispatch(didEditUser());
}