import {Item, ItemActionTypes, ADD_ITEM, DELETE_ITEM} from './types';
const axios = require('axios');

// not sure what the type should be so set it to any for now
export const addItem = (newItem: Item) : any => async (
  dispatch: any) => {
  try { 
    await axios.post('http://localhost:4000/items/createItem', {
      user_id: "1",
      count: newItem.count,
      name: newItem.name,
      category: newItem.category,
      icon: newItem.icon,
      expiryDate: newItem.expiry
    });
    dispatch({
      type: ADD_ITEM,
      payload: newItem,
    })
  } catch (err) {
    console.log(err);
  }
}

export function deleteItem(name: string): ItemActionTypes {
  return {
    type: DELETE_ITEM,
    payload: name,
  };
}
