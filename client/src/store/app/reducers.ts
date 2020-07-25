import {AppState} from '../types';
import {LOGIN, LOGOUT, UserActionTypes} from '../user/types';

export const initialState: AppState = {
  token: undefined,
  isLoggedIn: false,
  selectedFridge: undefined,
};

export function appReducer(
  state = initialState,
  action: UserActionTypes,
): AppState {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        token: action.payload.token,
        isLoggedIn: true,
      };
    case LOGOUT:
      return {
        ...state,
        token: undefined,
        isLoggedIn: false,
      };
    default:
      return state;
  }
}

