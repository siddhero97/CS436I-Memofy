export interface Item {
  _id: string;
  name: string;
  category: string;
  icon: string | undefined;
  count: number;
  expiryDate: Date;
}

export const WILL_ADD_ITEM = 'WILL_ADD_ITEM';
export const ADD_ITEM = 'ADD_ITEM';
export const DID_ADD_ITEM = 'DID_ADD_ITEM';

export const WILL_DEL_ITEM = 'WILL_DEL_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const DID_DEL_ITEM = 'DID_DEL_ITEM';

export const WILL_FETCH_ITEMS = 'WILL_FETCH_ITEMS';
export const FETCH_ITEMS = 'FETCH_ITEMS';
export const DID_FETCH_ITEMS = 'DID_FETCH_ITEMS';

export const WILL_EDIT_ITEM = 'WILL_EDIT_ITEM';
export const EDIT_ITEM = 'EDIT_ITEM';
export const DID_EDIT_ITEM = 'DID_EDIT_ITEM';

interface AddItemAction {
  type: typeof ADD_ITEM;
  payload: Item;
}

interface DeleteItemAction {
  type: typeof DELETE_ITEM;
  payload: string;
}

interface FetchItemsAction {
  type: typeof FETCH_ITEMS;
  payload: Item[];
}

interface EditItemAction {
  type: typeof EDIT_ITEM;
  payload: Item;
}

interface WillAction {
  type: typeof WILL_ADD_ITEM | typeof WILL_DEL_ITEM | typeof WILL_FETCH_ITEMS | typeof WILL_EDIT_ITEM;
}

interface DidAction {
  type: typeof DID_ADD_ITEM | typeof DID_DEL_ITEM | typeof DID_FETCH_ITEMS | typeof DID_EDIT_ITEM;
}

export type ItemActionTypes = AddItemAction | DeleteItemAction | FetchItemsAction | EditItemAction | WillAction | DidAction;