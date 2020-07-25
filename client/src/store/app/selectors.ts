import {RootState, AppState} from '../types';
import {createSelector} from 'reselect';

const selectAppState = (state: RootState) => state.app;

export const selectIsLoggedIn = createSelector(
  selectAppState,
  (app: AppState) => app.isLoggedIn
);

export const selectToken = createSelector(
  selectAppState,
  (app: AppState) => app.token
);

export const selectActiveFridge = createSelector(
  selectAppState,
  (app: AppState) => app.selectedFridge
);