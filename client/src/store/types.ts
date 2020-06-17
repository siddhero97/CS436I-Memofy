import {Item} from "./item/types";

export type RootState = {
  item: ItemState;
  user: UserState;
};

export interface ItemState {
  items: Item[];
}

export interface UserState {
  email: string | null;
}