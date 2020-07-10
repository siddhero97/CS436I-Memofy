import {Item, ADD_ITEM, DELETE_ITEM, GET_ITEMS, EDIT_ITEM} from './types';

const axios = require('axios');

// not sure what the type should be so set it to any for now
export const addItem = (newItem: Item): any => async (
  dispatch: any) => {
  try {
    await axios.post('http://localhost:4000/items/createItem', {
      user_id: "1",
      count: newItem.count,
      name: newItem.name,
      category: newItem.category,
      icon: newItem.icon,
      expiryDate: newItem.expiryDate
    });
    dispatch({
      type: ADD_ITEM,
      payload: newItem,
    });
  } catch (err) {
  }
};

export const getItems = () => async (
  dispatch: any) => {
  try {
    const items = await axios.get('http://localhost:4000/items/getItems');
    dispatch({
      type: GET_ITEMS,
      payload: items.data
    });
  } catch (err) {
  }
};

export const deleteItem = (body: string): any => async (
  dispatch: any) => {
  try {
    const response = await axios.delete('http://localhost:4000/items/deleteItem', {
      data: {name: body}
    });
    dispatch({
      type: DELETE_ITEM,
      payload: body,
    });
  } catch (err) {
  }
};

export const editItem = (newItem: Item): any => async (
  dispatch: any) => {
  try {
    await axios.put('http://localhost:4000/items/editItem', {
      count: newItem.count,
      category: newItem.category,
      icon: newItem.icon,
      expiryDate: newItem.expiryDate
    });
    dispatch({
      type: EDIT_ITEM,
      payload: newItem,
    });
  } catch (err) {
  }
};