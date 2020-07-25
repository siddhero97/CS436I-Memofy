import {
  FridgeActionTypes,
  ADD_FRIDGE,
  DELETE_FRIDGE,
  FETCH_FRIDGES,
  WILL_FETCH_FRIDGES,
  DID_FETCH_FRIDGES,
  WILL_ADD_FRIDGE,
  DID_ADD_FRIDGE,
  WILL_DEL_FRIDGE,
  DID_DEL_FRIDGE,
} from './types'; 
import {FridgeState} from 'store/types';

const initialState: FridgeState = {
  fridges: [],
  isLoading: false
};

export function fridgeReducer(
  state = initialState,
  action: FridgeActionTypes,
): FridgeState {
  switch (action.type) {
    case ADD_FRIDGE:
      return {
        ...state,
        fridges: [...state.fridges, action.payload],
      };
    case DELETE_FRIDGE:
      return {
        ...state,
        fridges: [...state.fridges].filter(({_id}) => _id !== action.payload),
      };
    case FETCH_FRIDGES:      
      return {
        ...state,
        fridges: action.payload
      };
    case WILL_FETCH_FRIDGES || WILL_ADD_FRIDGE|| WILL_DEL_FRIDGE:
      return {
        ...state,
        isLoading: true,
      };
    case DID_FETCH_FRIDGES || DID_ADD_FRIDGE || DID_DEL_FRIDGE:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
}
