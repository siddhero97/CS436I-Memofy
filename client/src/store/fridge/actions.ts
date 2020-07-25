import axios from 'axios';
import {
  Fridge,
  ADD_FRIDGE,
  DELETE_FRIDGE,
  FETCH_FRIDGES,
  FridgeActionTypes,
  WILL_FETCH_FRIDGES,
  DID_FETCH_FRIDGES,
  WILL_ADD_FRIDGE,
  DID_ADD_FRIDGE,
  WILL_DEL_FRIDGE,
  DID_DEL_FRIDGE,
} from './types';
import {AppThunk} from 'store';
import {setActiveFridge} from 'store/app/actions';
import {thunkFetchItems} from 'store/item/actions';

interface FetchFridgeResponse {
  fridges: Fridge[];
}

interface AddFridgeResponse {
  fridge: Fridge;
}

interface DeleteFridgeResponse {
  id: string;
}

interface SetSelectedFridgeResponse {
  selectedFridge: Fridge;
}

function willFetchFridges(): FridgeActionTypes {
  return {
    type: WILL_FETCH_FRIDGES,
  };
}
function fetchFridges(fridges: Fridge[]): FridgeActionTypes {
  return {
    type: FETCH_FRIDGES,
    payload: fridges,
  };
}
function didFetchFridges(): FridgeActionTypes {
  return {
    type: DID_FETCH_FRIDGES,
  };
}

function willAddFridge(): FridgeActionTypes {
  return {
    type: WILL_ADD_FRIDGE,
  };
}
function addFridge(fridge: Fridge): FridgeActionTypes {
  return {
    type: ADD_FRIDGE,
    payload: fridge,
  };
}
function didAddFridge(): FridgeActionTypes {
  return {
    type: DID_ADD_FRIDGE,
  };
}

function willDeleteFridge(): FridgeActionTypes {
  return {
    type: WILL_DEL_FRIDGE,
  };
}
function deleteFridge(id: string): FridgeActionTypes {
  return {
    type: DELETE_FRIDGE,
    payload: id,
  };
}
function didDeleteFridge(): FridgeActionTypes {
  return {
    type: DID_DEL_FRIDGE,
  };
}

export const thunkFetchFridges = (userId: string | undefined): AppThunk => async dispatch => {
  dispatch(willFetchFridges());
  const {data: {fridges}} = await axios.get<FetchFridgeResponse>('http://localhost:4000/fridges/get', {
    params: {
      userId: userId
    }
  });
  dispatch(fetchFridges(fridges));
  if (fridges.length > 0) {
    const firstFridge = fridges[0];
    dispatch(setActiveFridge(firstFridge));
    dispatch(didFetchFridges());
    dispatch(thunkFetchItems(firstFridge));
  }
};

export const thunkAddFridge = (newFridge: Partial<Fridge>): AppThunk => async dispatch => {
  dispatch(willAddFridge());
  const {data: {fridge}} = await axios.post<AddFridgeResponse>('http://localhost:4000/fridges/post', newFridge);
  dispatch(addFridge(fridge));
  dispatch(didAddFridge());
};

export const thunkDeleteFridge = (id: string): AppThunk => async dispatch => {
  dispatch(willDeleteFridge());

  const {data: {id: deletedId}} = await axios.delete<DeleteFridgeResponse>('http://localhost:4000/fridges/del', {
    data: {id}
  });

  dispatch(deleteFridge(deletedId));
  dispatch(didDeleteFridge());
};
