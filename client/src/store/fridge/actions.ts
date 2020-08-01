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
  WILL_EDIT_FRIDGE,
  EDIT_FRIDGE,
  DID_EDIT_FRIDGE,
  WILL_DEL_FRIDGE,
  DEL_FRIDGE,
  DID_DEL_FRIDGE,
  WILL_FETCH_USERS_SHARED_WITH,
  FETCH_USERS_SHARED_WITH,
  DID_FETCH_USERS_SHARED_WITH,
  WILL_ADD_USERS_SHARED_WITH,
  ADD_USERS_SHARED_WITH,
  DID_ADD_USERS_SHARED_WITH,
} from './types';
import {AppThunk} from 'store';
import {selectToken, selectActiveFridge} from 'store/app/selectors';
import {User} from 'store/user/types';
import {setActiveFridge} from 'store/app/actions';

interface FetchFridgeResponse {
  fridges: Fridge[];
}

export interface AddFridgeResponse {
  fridge: Fridge;
  user: User;
}

interface EditFridgeResponse {
  fridge: Fridge;
}

export interface DeleteFridgeResponse {
  id: string;
  user: User;
}

export interface FetchUsersSharedWithResponse {
  users: User[];
}

export interface AddUsersSharedWithResponse {
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

function willEditFridge(): FridgeActionTypes {
  return {
    type: WILL_EDIT_FRIDGE,
  };
}
function editFridge(fridge: Fridge): FridgeActionTypes {
  return {
    type: EDIT_FRIDGE,
    payload: fridge,
  };
}
function didEditFridge(): FridgeActionTypes {
  return {
    type: DID_EDIT_FRIDGE,
  };
}

function willDeleteFridge(): FridgeActionTypes {
  return {
    type: WILL_DEL_FRIDGE,
  };
}
function deleteFridge(id: string, user: User): FridgeActionTypes {
  return {
    type: DEL_FRIDGE,
    payload: {id, user},
  };
}
function didDeleteFridge(): FridgeActionTypes {
  return {
    type: DID_DEL_FRIDGE,
  };
}

function willFetchUsersSharedWith(): FridgeActionTypes {
  return {
    type: WILL_FETCH_USERS_SHARED_WITH,
  };
}
function fetchUsersSharedWith(users: User[]): FridgeActionTypes {
  return {
    type: FETCH_USERS_SHARED_WITH,
    payload: users,
  };
}
function didFetchUsersSharedWith(): FridgeActionTypes {
  return {
    type: DID_FETCH_USERS_SHARED_WITH,
  };
}

function willAddUsersSharedWith(): FridgeActionTypes {
  return {
    type: WILL_ADD_USERS_SHARED_WITH,
  };
}
function addUsersSharedWith(user: User): FridgeActionTypes {
  return {
    type: ADD_USERS_SHARED_WITH,
    payload: user,
  };
}
function didAddUsersSharedWith(): FridgeActionTypes {
  return {
    type: DID_ADD_USERS_SHARED_WITH,
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
  dispatch(setActiveFridge(data.fridge));
  dispatch(didAddFridge());
};

export const thunkEditFridge = (fridge: Partial<Fridge>): AppThunk => async (dispatch, getState) => {
  dispatch(willEditFridge());

  const token = selectToken(getState());

  const {data: {fridge: updatedFridge}} = await axios.put<EditFridgeResponse>('/api/fridges/edit',
    fridge,
    {
      params: {
        token
      }
    }
  );

  dispatch(editFridge(updatedFridge));
  dispatch(setActiveFridge(updatedFridge));
  dispatch(didEditFridge());
};

export const thunkDeleteFridge = (id: string): AppThunk => async (dispatch, getState) => {
  dispatch(willDeleteFridge());

  const token = selectToken(getState());

  const {data: {id: deletedId, user}} = await axios.delete<DeleteFridgeResponse>('/api/fridges/del',
    {
      data: {
        id
      },
      params: {
        token
      }
    }
  );

  dispatch(deleteFridge(deletedId, user));
  dispatch(setActiveFridge(undefined));
  dispatch(didDeleteFridge());
};

export const thunkFetchUsersSharedWith = (id: string): AppThunk => async (dispatch, getState) => {
  dispatch(willFetchUsersSharedWith());

  const token = selectToken(getState());

  const {data: {users}} = await axios.get<FetchUsersSharedWithResponse>('/api/fridges/users', {
    params: {
      id,
      token
    }
  });

  dispatch(fetchUsersSharedWith(users));
  dispatch(didFetchUsersSharedWith());
};

export const thunkAddUsersSharedWith = (email: string): AppThunk => async (dispatch, getState) => {
  dispatch(willAddUsersSharedWith());

  const token = selectToken(getState());
  const {_id} = selectActiveFridge(getState()) as Fridge;

  const {data: {user}} = await axios.get('/api/users/get', {
    params: {
      email,
      token
    }
  });

  const {data: {user: updatedUser}} = await axios.put<AddUsersSharedWithResponse>('/api/users/edit',
    {
      ...user,
      fridgeIds: [...user.fridgeIds, _id]
    },
    {
      params: {
        token
      }
    }
  );

  dispatch(addUsersSharedWith(updatedUser));
  dispatch(didAddUsersSharedWith());
};