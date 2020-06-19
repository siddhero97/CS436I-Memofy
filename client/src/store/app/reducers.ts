import {AppState} from '../types';
import {LOGIN, LOGOUT, UserActionTypes} from '../user/types';

export const initialState: AppState = {
  isLoggedIn: false
};

export function appReducer(
  state = initialState,
  action: UserActionTypes,
): AppState {
  switch (action.type) {
    case LOGIN:
      return {
        isLoggedIn: true,
      };
    case LOGOUT:
      return {
        isLoggedIn: false,
      };
    default:
      return state;
  }
}

