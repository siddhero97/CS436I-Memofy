import {combineReducers} from 'redux';
import {itemReducer} from './item/reducers';
import {userReducer} from './user/reducers';
import {appReducer} from './app/reducers';

export const rootReducer = combineReducers({
  item: itemReducer,
  user: userReducer,
  app: appReducer,
});