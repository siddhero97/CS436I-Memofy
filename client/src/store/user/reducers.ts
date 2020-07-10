import {LOGIN, LOGOUT, REGISTER, UserActionTypes} from './types';
import {UserState} from 'store/types';

const initialState: UserState =
  {
    email: 'rijeonghyeok@korea.com'
  };

export function userReducer(
  state = initialState,
  action: UserActionTypes,
): UserState {
  switch (action.type) {
    case LOGIN:
      console.log("action,.payload ", action.payload);
      return action.payload;
    case LOGOUT:
      return {
        email: null
      };
    case REGISTER:
      return {
        email: action.payload.email
      };
    default:
      return state;
  }
}