import {UserActionTypes, LOGIN, LOGOUT, WILL_LOGIN, DID_LOGIN} from './types';
import {UserState} from 'store/types';

const intialState: UserState = {
  isLoading: false,
};

export function userReducer(
  state = intialState,
  action: UserActionTypes,
): UserState {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        ...action.payload.user
      };
    case LOGOUT:
      return {
        ...state
      };
    case WILL_LOGIN:
      return {
        ...state,
        isLoading: true,
      };
    case DID_LOGIN:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
}