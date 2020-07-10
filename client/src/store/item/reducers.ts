import {ItemActionTypes, ADD_ITEM, DELETE_ITEM, GET_ITEMS} from './types';
import {ItemState} from 'store/types';

export function itemReducer(
  state = {items:[]},
  action: ItemActionTypes,
): ItemState {
  switch (action.type) {
    case ADD_ITEM:
      return {
        items: [...state.items, action.payload],
      };
    case DELETE_ITEM:
      return {
        items: [...state.items].filter(({name}) => name !== action.payload),
      };
    case GET_ITEMS:
      return {
        items: action.payload
      };
    default:
      return state;
  }
}