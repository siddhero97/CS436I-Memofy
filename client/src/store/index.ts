import {combineReducers} from 'redux';
import {itemReducer} from './item/reducers';

export const rootReducer = combineReducers({
  item: itemReducer,
});