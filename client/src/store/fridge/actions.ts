import axios from 'axios'
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

interface FetchFridgeResponse {
  Fridges: Fridge[];
}

interface AddFridgeResponse {
  Fridge: Fridge;
}

interface DeleteFridgeResponse {
  id: string;
}

function willFetchFridges(): FridgeActionTypes {
  return {
    type: WILL_FETCH_FRIDGES,
  };
}
function fetchFridges(Fridges: Fridge[]): FridgeActionTypes {
  return {
    type: FETCH_FRIDGES,
    payload: Fridges,
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
function addFridge(Fridge: Fridge): FridgeActionTypes {
  return {
    type: ADD_FRIDGE,
    payload: Fridge,
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

export const thunkFetchFridges = (): AppThunk => async dispatch => {
  dispatch(willFetchFridges());

  const {data: {Fridges}} = await axios.get<FetchFridgeResponse>('http://localhost:4000/fridges/get');

  dispatch(fetchFridges(Fridges));
  dispatch(didFetchFridges());
};

export const thunkAddFridge = (newFridge: Partial<Fridge>): AppThunk => async dispatch => {
  dispatch(willAddFridge());
  console.log('ihi')
  const {data: {Fridge}} = await axios.post<AddFridgeResponse>('http://localhost:4000/fridges/post', newFridge);
  console.log('done')
  dispatch(addFridge(Fridge));
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