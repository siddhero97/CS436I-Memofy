export interface Fridge {
  _id: string;
  name: String;
  userIds: (String | undefined)[];
  categories: String[];
  filters: String[];
}

export const WILL_ADD_FRIDGE = 'WILL_ADD_FRIDGE';
export const ADD_FRIDGE = 'ADD_FRIDGE';
export const DID_ADD_FRIDGE = 'DID_ADD_FRIDGE';

export const WILL_DEL_FRIDGE = 'WILL_DEL_FRIDGE';
export const DELETE_FRIDGE = 'DELETE_FRIDGE';
export const DID_DEL_FRIDGE = 'DID_DEL_FRIDGE';

export const WILL_FETCH_FRIDGES = 'WILL_FETCH_FRIDGES';
export const FETCH_FRIDGES = 'FETCH_FRIDGES';
export const DID_FETCH_FRIDGES = 'DID_FETCH_FRIDGES';

interface AddFridgeAction {
  type: typeof ADD_FRIDGE;
  payload: Fridge;
}

interface DeleteFridgeAction {
  type: typeof DELETE_FRIDGE;
  payload: string;
}

interface FetchFridgesAction {
  type: typeof FETCH_FRIDGES;
  payload: Fridge[];
}

interface WillAction {
  type: typeof WILL_ADD_FRIDGE | typeof WILL_DEL_FRIDGE | typeof WILL_FETCH_FRIDGES;
}

interface DidAction {
  type: typeof DID_ADD_FRIDGE | typeof DID_DEL_FRIDGE | typeof DID_FETCH_FRIDGES;
}

export type FridgeActionTypes = AddFridgeAction | DeleteFridgeAction | FetchFridgesAction | WillAction | DidAction;