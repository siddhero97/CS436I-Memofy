import {Item} from "./item/types";

export type RootState = {
  item: ItemState;
};

export interface ItemState {
  items: Item[];
}