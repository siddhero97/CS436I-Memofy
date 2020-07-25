import {
  Fridge,
} from '../fridge/types';
import {
  AppActionTypes,
  SET_ACTIVE_FRIDGE
} from '../types';

export function setActiveFridge(activeFridge: Fridge): AppActionTypes {
  return {
    type: SET_ACTIVE_FRIDGE,
    payload: activeFridge
  };
}
