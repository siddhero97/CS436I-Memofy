import {UserActionTypes, LOGIN, LOGOUT} from './types';
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
      return action.payload;
    case LOGOUT:
      return {
        email: null
      };
    default:
      return state;
  }
}