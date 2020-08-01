import {AddFridgeResponse, DeleteFridgeResponse} from "./actions";
import {User} from "store/user/types";

export interface Fridge {
  _id: string;
  name: string;
  itemIds: string[];
  categories: string[];
  filters: string[];
}

export const WILL_ADD_FRIDGE = 'WILL_ADD_FRIDGE';
export const ADD_FRIDGE = 'ADD_FRIDGE';
export const DID_ADD_FRIDGE = 'DID_ADD_FRIDGE';

export const WILL_DEL_FRIDGE = 'WILL_DEL_FRIDGE';
export const DEL_FRIDGE = 'DEL_FRIDGE';
export const DID_DEL_FRIDGE = 'DID_DEL_FRIDGE';

export const WILL_EDIT_FRIDGE = 'WILL_EDIT_FRIDGE';
export const EDIT_FRIDGE = 'EDIT_FRIDGE';
export const DID_EDIT_FRIDGE = 'DID_EDIT_FRIDGE';

export const WILL_FETCH_FRIDGES = 'WILL_FETCH_FRIDGES';
export const FETCH_FRIDGES = 'FETCH_FRIDGES';
export const DID_FETCH_FRIDGES = 'DID_FETCH_FRIDGES';

export const WILL_FETCH_USERS_SHARED_WITH = 'WILL_FETCH_USERS_SHARED_WITH';
export const FETCH_USERS_SHARED_WITH = 'FETCH_USERS_SHARED_WITH';
export const DID_FETCH_USERS_SHARED_WITH = 'DID_FETCH_USERS_SHARED_WITH';

export const WILL_ADD_USERS_SHARED_WITH = 'WILL_ADD_USERS_SHARED_WITH';
export const ADD_USERS_SHARED_WITH = 'ADD_USERS_SHARED_WITH';
export const DID_ADD_USERS_SHARED_WITH = 'DID_ADD_USERS_SHARED_WITH';

interface AddFridgeAction {
  type: typeof ADD_FRIDGE;
  payload: AddFridgeResponse;
}

interface EditFridgeAction {
  type: typeof EDIT_FRIDGE;
  payload: Fridge;
}

interface DeleteFridgeAction {
  type: typeof DEL_FRIDGE;
  payload: DeleteFridgeResponse;
}

interface FetchFridgesAction {
  type: typeof FETCH_FRIDGES;
  payload: Fridge[];
}

interface AddUsersSharedWithAction {
  type: typeof ADD_USERS_SHARED_WITH;
  payload: User;
}

interface FetchUsersSharedWithAction {
  type: typeof FETCH_USERS_SHARED_WITH;
  payload: User[];
}

interface WillAction {
  type: typeof WILL_ADD_FRIDGE | typeof WILL_DEL_FRIDGE | typeof WILL_FETCH_FRIDGES | typeof WILL_EDIT_FRIDGE | typeof WILL_FETCH_USERS_SHARED_WITH | typeof WILL_ADD_USERS_SHARED_WITH;
}

interface DidAction {
  type: typeof DID_ADD_FRIDGE | typeof DID_DEL_FRIDGE | typeof DID_FETCH_FRIDGES | typeof DID_EDIT_FRIDGE | typeof DID_FETCH_USERS_SHARED_WITH | typeof DID_ADD_USERS_SHARED_WITH;
}

export type FridgeActionTypes = AddFridgeAction | DeleteFridgeAction | FetchFridgesAction | EditFridgeAction | FetchUsersSharedWithAction | AddUsersSharedWithAction | WillAction | DidAction;