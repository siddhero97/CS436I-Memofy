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
  email: string | null;
}

export interface AppState {
  isLoggedIn: boolean;
}