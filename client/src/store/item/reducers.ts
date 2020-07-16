import {
  ItemActionTypes,
  ADD_ITEM,
  DELETE_ITEM,
  FETCH_ITEMS,
  WILL_FETCH_ITEMS,
  DID_FETCH_ITEMS,
  WILL_ADD_ITEM,
  WILL_DEL_ITEM,
  WILL_EDIT_ITEM,
  DID_ADD_ITEM,
  DID_DEL_ITEM,
  DID_EDIT_ITEM,
  EDIT_ITEM
} from './types';
import {ItemState} from 'store/types';

const initialState: ItemState = {
  items: [],
  isLoading: false
};

export function itemReducer(
  state = initialState,
  action: ItemActionTypes,
): ItemState {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case DELETE_ITEM:
      return {

        ...state,
        items: [...state.items].filter(({_id}) => _id !== action.payload),
      };
    case FETCH_ITEMS:
      return {
        ...state,
        items: action.payload
      };
    case EDIT_ITEM:
      return {
        ...state,
        items: [...state.items.filter(({_id}) => _id !== action.payload._id), action.payload]
      };
    case WILL_FETCH_ITEMS || WILL_ADD_ITEM || WILL_DEL_ITEM || WILL_EDIT_ITEM:
      return {
        ...state,
        isLoading: true,
      };
    case DID_FETCH_ITEMS || DID_ADD_ITEM || DID_DEL_ITEM || DID_EDIT_ITEM:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
}