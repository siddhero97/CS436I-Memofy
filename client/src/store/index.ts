import {combineReducers} from 'redux';
import {itemReducer} from './item/reducers';
import {userReducer} from './user/reducers';

export const rootReducer = combineReducers({
  item: itemReducer,
  user: userReducer
});