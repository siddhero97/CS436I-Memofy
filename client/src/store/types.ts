import {Item} from "./item/types";
import {Fridge} from './fridge/types';

export type RootState = {
  item: ItemState;
  user: UserState;
  app: AppState;
  fridge: FridgeState;
};

export interface FridgeState {
  isLoading: boolean;
  fridges: Fridge[];
}

export interface ItemState {
  isLoading: boolean;
  items: Item[];
}

export interface UserState {
  _id?: string;
  isLoading: boolean;
  firstName?: string;
  lastName?: string;
  email?: string;
}

export interface AppState {
  token?: string;
  isLoggedIn: boolean;
  selectedFridge: Fridge;
}

export const WILL_SET_ACTIVE_FRIDGE = 'WILL_SET_ACTIVE_FRIDGE';
export const SET_ACTIVE_FRIDGE = 'SET_ACTIVE_FRIDGE';
export const DID_SET_ACTIVE_FRIDGE = 'DID_SET_ACTIVE_FRIDGE';

interface SetActiveAction {
  type: typeof SET_ACTIVE_FRIDGE;
  payload: Fridge;
}

interface WillAction {
  type: typeof WILL_SET_ACTIVE_FRIDGE;
}

interface DidAction {
  type: typeof DID_SET_ACTIVE_FRIDGE;
}
export type AppActionTypes = SetActiveAction | WillAction | DidAction;