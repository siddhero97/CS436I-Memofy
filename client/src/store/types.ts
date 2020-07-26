import {Item} from "./item/types";
import {Fridge} from "./fridge/types";

export type RootState = {
  item: ItemState;
  user: UserState;
  app: AppState;
  fridge: FridgeState;
};

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
  selectedFridge?: Fridge;
}

export interface FridgeState {
  isLoading: boolean;
  fridges: Fridge[];
}