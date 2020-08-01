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
  EDIT_ITEM,
  CHANGE_SELECTED_CATEGORIES,
  CLEAR_SELECTED_CATEGORIES
} from './types';
import {UserActionTypes, LOGOUT} from 'store/user/types';
import {ItemState} from '../types';

const initialState: ItemState = {
  items: [],
  isLoading: false,
  selectedCategories: [],
};

export function itemReducer(
  state = initialState,
  action: ItemActionTypes | UserActionTypes,
): ItemState {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        items: [...state.items, action.payload.item],
      };
    case DELETE_ITEM:
      return {
        ...state,
        items: [...state.items].filter(({_id}) => _id !== action.payload),
      };
    case FETCH_ITEMS:
      return {
        ...state,
        items: action.payload,
      };
    case EDIT_ITEM: {
      const updatedItemIndex = state.items.findIndex(({_id}) => _id === action.payload._id);

      state.items[updatedItemIndex] = action.payload;

      return {
        ...state,
        items: [...state.items]
      };
    }
    case CHANGE_SELECTED_CATEGORIES:
      return {
        ...state,
        selectedCategories: action.payload
      };
    case CLEAR_SELECTED_CATEGORIES:
      return {
        ...state,
        selectedCategories: []
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
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
}