import {RootState, FridgeState} from '../types';
import {createSelector} from 'reselect';

const selectFridgeState = (state: RootState) => state.fridge;

export const selectIsLoading = createSelector(
  selectFridgeState,
  (fridge: FridgeState) => fridge.isLoading
);

export const selectFridges = createSelector(
  selectFridgeState,
  (fridge: FridgeState) => fridge.fridges
);

export const selectUsersSharedWith = createSelector(
  selectFridgeState,
  (fridge: FridgeState) => fridge.usersSharedWith
);

