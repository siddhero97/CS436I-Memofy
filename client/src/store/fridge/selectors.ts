import {RootState, FridgeState} from '../types';
import {createSelector} from 'reselect';

const selectFridgeState = (state: RootState) => state.fridge;

export const selectFridges = createSelector(
  selectFridgeState,
  (fridge: FridgeState) => fridge.fridges
);
