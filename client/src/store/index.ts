import {combineReducers, Action} from 'redux';
import {itemReducer} from './item/reducers';
import {userReducer} from './user/reducers';
import {appReducer} from './app/reducers';
import {ThunkAction} from 'redux-thunk';
import {fridgeReducer} from './fridge/reducers';
import {feedAlertReducer} from './feedAlert/reducers';

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export const rootReducer = combineReducers({
  item: itemReducer,
  user: userReducer,
  app: appReducer,
  fridge: fridgeReducer,
  feedAlert: feedAlertReducer,
});

export type RootState = ReturnType<typeof rootReducer>;