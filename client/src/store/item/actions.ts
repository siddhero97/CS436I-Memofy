import {Item, ItemActionTypes, ADD_ITEM, DELETE_ITEM} from './types';

export function addItem(newItem: Item): ItemActionTypes {
  return {
    type: ADD_ITEM,
    payload: newItem,
  };
}

export function deleteItem(name: string): ItemActionTypes {
  return {
    type: DELETE_ITEM,
    payload: name,
  };
}