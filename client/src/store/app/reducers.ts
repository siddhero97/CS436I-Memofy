import {AppState} from '../types';
import {LOGIN, LOGOUT, UserActionTypes} from '../user/types';
import {AppActionTypes, SET_ACTIVE_FRIDGE} from '../types';
import {Fridge} from 'store/fridge/types';

const initialFridge: Fridge = {
  _id: "",
  name: "noFridge",
  userIds: [],
  categories: [],
  filters: [],
};

export const initialState: AppState = {
  token: undefined,
  isLoggedIn: false,
  selectedFridge: initialFridge,
};

export function appReducer(
  state = initialState,
  action: UserActionTypes | AppActionTypes,
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
    case SET_ACTIVE_FRIDGE:
      return {
        ...state,
        selectedFridge: action.payload
      };
    default:
      return state;
  }
}

