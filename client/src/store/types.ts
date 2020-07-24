import {Item} from "./item/types";

export type RootState = {
  item: ItemState;
  user: UserState;
  app: AppState;
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
}