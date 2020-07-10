export interface Item {
  name: string;
  category: string;
  icon: string | undefined;
  count: number;
  expiryDate: string;
}

export const ADD_ITEM = 'ADD_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const GET_ITEMS = 'GET_ITEMS';
export const EDIT_ITEM = 'EDIT_ITEM';

interface AddItemAction {
  type: typeof ADD_ITEM;
  payload: Item;
}

interface DeleteItemAction {
  type: typeof DELETE_ITEM;
  payload: string;
}

interface GetItemsAction {
  type: typeof GET_ITEMS;
  payload: Item[];
}

interface EditItemAction {
  type: typeof EDIT_ITEM;
}

export type ItemActionTypes = AddItemAction | DeleteItemAction | GetItemsAction | EditItemAction;