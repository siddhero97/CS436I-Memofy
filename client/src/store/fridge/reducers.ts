import {
  FridgeActionTypes,
  ADD_FRIDGE,
  DEL_FRIDGE,
  FETCH_FRIDGES,
  WILL_FETCH_FRIDGES,
  DID_FETCH_FRIDGES,
  WILL_ADD_FRIDGE,
  DID_ADD_FRIDGE,
  WILL_DEL_FRIDGE,
  DID_DEL_FRIDGE,
} from './types';
import {FridgeState} from 'store/types';
import {LOGOUT, UserActionTypes} from 'store/user/types';
import {ADD_ITEM, ItemActionTypes, WILL_ADD_ITEM, WILL_DEL_ITEM} from 'store/item/types';

const initialState: FridgeState = {
  fridges: [],
  isLoading: false
};

export function fridgeReducer(
  state = initialState,
  action: FridgeActionTypes | UserActionTypes | ItemActionTypes,
): FridgeState {
  switch (action.type) {
    case ADD_FRIDGE:
      return {
        ...state,
        fridges: [...state.fridges, action.payload.fridge],
      };
    case DEL_FRIDGE:
      return {
        ...state,
        fridges: [...state.fridges].filter(({_id}) => _id !== action.payload),
      };
    case FETCH_FRIDGES:
      return {
        ...state,
        fridges: action.payload
      };
    case ADD_ITEM: {
      const updatedFrigeIndex = state.fridges.findIndex(({_id}) => _id === action.payload.fridge._id);

      state.fridges[updatedFrigeIndex].categories = action.payload.fridge.categories;

      return {
        ...state,
        fridges: [...state.fridges]
      };
    }
    case WILL_FETCH_FRIDGES || WILL_ADD_FRIDGE || WILL_DEL_FRIDGE || WILL_ADD_ITEM:
      return {
        ...state,
        isLoading: true,
      };
    case DID_FETCH_FRIDGES || DID_ADD_FRIDGE || DID_DEL_FRIDGE || WILL_DEL_ITEM:
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