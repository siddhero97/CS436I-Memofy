import {AppState} from '../types';
import {LOGIN, LOGOUT, UserActionTypes} from '../user/types';
import {SET_ACTIVE_FRIDGE, AppActionTypes} from './types';

export const initialState: AppState = {
  token: undefined,
  isLoggedIn: false
};

export function appReducer(
  state = initialState,
  action: UserActionTypes | AppActionTypes,
): AppState {
  switch (action.type) {
    case SET_ACTIVE_FRIDGE:
      return {
        ...state,
        selectedFridge: action.payload
      };
    case LOGIN:
      return {
        ...state,
        token: action.payload.token,
        isLoggedIn: true,
      };
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
}

