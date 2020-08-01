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
  DID_EDIT_ITEM,
  CHANGE_SELECTED_CATEGORIES,
  CLEAR_SELECTED_CATEGORIES
} from './types';
import {AppThunk} from '..';
import {selectToken, selectActiveFridge} from 'store/app/selectors';
import {Fridge} from 'store/fridge/types';
import {setActiveFridge} from 'store/app/actions';

interface FetchItemsResponse {
  items: Item[];
}

interface AddItemResponse {
  item: Item;
  fridge: Fridge;
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
function addItem(item: Item, fridge: Fridge): ItemActionTypes {
  return {
    type: ADD_ITEM,
    payload: {item, fridge},
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

export function changeSelectedCategories(selectedCategories: string[]): ItemActionTypes {
  return {
    type: CHANGE_SELECTED_CATEGORIES,
    payload: selectedCategories,
  };
}

export function clearSelectedCategories(): ItemActionTypes {
  return {
    type: CLEAR_SELECTED_CATEGORIES,
  };
}

export const thunkInitialItemListLoad = (fridge: Fridge): AppThunk => async (dispatch) => {
  dispatch(setActiveFridge(fridge));
};

export const thunkFetchItems = (
  fridgeId: string,
  categoriesSelected: string[],
): AppThunk => async (dispatch, getState) => {
  dispatch(willFetchItems());

  const token = selectToken(getState());

  const {data: {items}} = await axios.get<FetchItemsResponse>('/api/items/get', {
    params: {
      token,
      fridgeId: fridgeId,
      categoriesSelected,
    }
  });

  dispatch(fetchItems(items));
  dispatch(didFetchItems());
};

export const thunkAddItem = (newItem: Partial<Item>): AppThunk => async (dispatch, getState) => {
  dispatch(willAddItem());

  const token = selectToken(getState());
  const {_id} = selectActiveFridge(getState()) as Fridge;

  const {data: {item, fridge}} = await axios.post<AddItemResponse>('/api/items/post',
    {
      fridgeId: _id,
      newItem
    },
    {
      params: {
        token
      }
    }
  );

  dispatch(addItem(item, fridge));
  dispatch(didAddItem());
};

export const thunkDeleteItem = (id: string): AppThunk => async (dispatch, getState) => {
  dispatch(willDeleteItem());

  const token = selectToken(getState());
  const {_id} = selectActiveFridge(getState()) as Fridge;

  const {data: {id: deletedId}} = await axios.delete<DeleteItemResponse>('/api/items/del',
    {
      data: {
        fridgeId: _id,
        id
      },
      params: {
        token
      }
    },
  );

  dispatch(deleteItem(deletedId));
  dispatch(didDeleteItem());
};

export const thunkEditItem = (updatedItem: Partial<Item>): AppThunk => async (dispatch, getState) => {
  dispatch(willEditItem());

  const token = selectToken(getState());

  const {data: {item}} = await axios.put<EditItemResponse>('/api/items/edit',
    updatedItem,
    {
      params: {
        token
      }
    }
  );

  dispatch(editItem(item));
  dispatch(didEditItem());
};