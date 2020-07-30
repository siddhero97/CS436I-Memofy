import {Fridge} from "store/fridge/types";

export const WILL_SET_ACTIVE_FRIDGE = 'WILL_SET_ACTIVE_FRIDGE';
export const SET_ACTIVE_FRIDGE = 'SET_ACTIVE_FRIDGE';
export const DID_SET_ACTIVE_FRIDGE = 'DID_SET_ACTIVE_FRIDGE';

interface SetActiveAction {
  type: typeof SET_ACTIVE_FRIDGE;
  payload: Fridge | undefined;
}

interface WillAction {
  type: typeof WILL_SET_ACTIVE_FRIDGE;
}

interface DidAction {
  type: typeof DID_SET_ACTIVE_FRIDGE;
}
export type AppActionTypes = SetActiveAction | WillAction | DidAction;