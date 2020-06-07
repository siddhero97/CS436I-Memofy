export interface Item {
  id: number;
  name: string;
  category: string;
  count: number;
  expiry: string;
}

export const ADD_ITEM = 'ADD_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';

interface AddItemAction {
  type: typeof ADD_ITEM;
  payload: Item;
}

interface DeleteItemAction {
  type: typeof DELETE_ITEM;
  payload: number;
}

export type ItemActionTypes = AddItemAction | DeleteItemAction;