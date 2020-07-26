import {UserActionTypes, LOGIN, LOGOUT, WILL_LOGIN, DID_LOGIN} from './types';
import {UserState} from '../types';
import {FridgeActionTypes, ADD_FRIDGE} from 'store/fridge/types';

const intialState: UserState = {
  isLoading: false,
};

export function userReducer(
  state = intialState,
  action: UserActionTypes | FridgeActionTypes,
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
    case ADD_FRIDGE:
      return {
        ...state,
        ...action.payload.user
      }
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