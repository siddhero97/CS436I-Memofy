import axios from 'axios';
import {
  Fridge,
  ADD_FRIDGE,
  FETCH_FRIDGES,
  FridgeActionTypes,
  WILL_FETCH_FRIDGES,
  DID_FETCH_FRIDGES,
  WILL_ADD_FRIDGE,
  DID_ADD_FRIDGE,
} from './types';
import {AppThunk} from 'store';
import {selectToken} from 'store/app/selectors';
import {User} from 'store/user/types';

interface FetchFridgeResponse {
  fridges: Fridge[];
}

export interface AddFridgeResponse {
  fridge: Fridge;
  user: User;
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
function addFridge(data: AddFridgeResponse): FridgeActionTypes {
  return {
    type: ADD_FRIDGE,
    payload: data,
  };
}
function didAddFridge(): FridgeActionTypes {
  return {
    type: DID_ADD_FRIDGE,
  };
}

export const thunkInitialFridgeLoad = (): AppThunk => async (dispatch, getState) => {
  dispatch(willFetchFridges());

  const token = selectToken(getState());

  const {data: {fridges}} = await axios.get<FetchFridgeResponse>('/api/fridges/get', {
    params: {
      token
    }
  });

  dispatch(fetchFridges(fridges));
  dispatch(didFetchFridges());
};

export const thunkAddFridge = (name: string): AppThunk => async (dispatch, getState) => {
  dispatch(willAddFridge());

  const token = selectToken(getState());

  const {data} = await axios.post<AddFridgeResponse>('/api/fridges/post',
    {
      name
    },
    {
      params: {
        token
      }
    }
  );

  dispatch(addFridge(data));
  dispatch(didAddFridge());
};