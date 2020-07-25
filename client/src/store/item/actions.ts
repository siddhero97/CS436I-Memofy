import axios from 'axios';
import {
  Item,
  ADD_ITEM,
  DELETE_ITEM,
  FETCH_ITEMS,
  EDIT_ITEM,
  ItemActionTypes,
  WILL_FETCH_ITEMS,
  DID_FETCH_ITEMS,
  WILL_ADD_ITEM,
  DID_ADD_ITEM,
  WILL_DEL_ITEM,
  DID_DEL_ITEM,
  WILL_EDIT_ITEM,
  DID_EDIT_ITEM
} from './types';
import {AppThunk} from 'store';
import {Fridge} from 'store/fridge/types';

interface FetchItemResponse {
  items: Item[];
}

interface AddItemResponse {
  item: Item;
}

interface DeleteItemResponse {
  id: string;
}

interface EditItemResponse {
  item: Item;
}

function willFetchItems(): ItemActionTypes {
  return {
    type: WILL_FETCH_ITEMS,
  };
}
function fetchItems(items: Item[]): ItemActionTypes {
  return {
    type: FETCH_ITEMS,
    payload: items,
  };
}
function didFetchItems(): ItemActionTypes {
  return {
    type: DID_FETCH_ITEMS,
  };
}

function willAddItem(): ItemActionTypes {
  return {
    type: WILL_ADD_ITEM,
  };
}
function addItem(item: Item): ItemActionTypes {
  return {
    type: ADD_ITEM,
    payload: item,
  };
}
function didAddItem(): ItemActionTypes {
  return {
    type: DID_ADD_ITEM,
  };
}

function willDeleteItem(): ItemActionTypes {
  return {
    type: WILL_DEL_ITEM,
  };
}
function deleteItem(id: string): ItemActionTypes {
  return {
    type: DELETE_ITEM,
    payload: id,
  };
}
function didDeleteItem(): ItemActionTypes {
  return {
    type: DID_DEL_ITEM,
  };
}

function willEditItem(): ItemActionTypes {
  return {
    type: WILL_EDIT_ITEM,
  };
}
function editItem(item: Item): ItemActionTypes {
  return {
    type: EDIT_ITEM,
    payload: item,
  };
}
function didEditItem(): ItemActionTypes {
  return {
    type: DID_EDIT_ITEM,
  };
}

export const thunkFetchItems = (fridgeId: Fridge): AppThunk => async dispatch => {
  dispatch(willFetchItems());

  const {data: {items}} = await axios.get<FetchItemResponse>('http://localhost:4000/items/get', {
    params: {
      fridgeId: fridgeId._id
    }
  });

  dispatch(fetchItems(items));
  dispatch(didFetchItems());
};

export const thunkAddItem = (newItem: Partial<Item>): AppThunk => async dispatch => {
  dispatch(willAddItem());

  const {data: {item}} = await axios.post<AddItemResponse>('http://localhost:4000/items/post', newItem);

  dispatch(addItem(item));
  dispatch(didAddItem());
};

export const thunkDeleteItem = (id: string): AppThunk => async dispatch => {
  dispatch(willDeleteItem());

  const {data: {id: deletedId}} = await axios.delete<DeleteItemResponse>('http://localhost:4000/items/del', {
    data: {id}
  });

  dispatch(deleteItem(deletedId));
  dispatch(didDeleteItem());
};

export const thunkEditItem = (updatedItem: Partial<Item>): AppThunk => async dispatch => {
  dispatch(willEditItem());

  const {data: {item}} = await axios.put<EditItemResponse>('http://localhost:4000/items/put', updatedItem);

  dispatch(editItem(item));
  dispatch(didEditItem());
};