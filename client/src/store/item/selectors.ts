import {RootState, ItemState} from '../types';
import {createSelector} from 'reselect';

const selectItemState = (state: RootState) => state.item;

export const selectIsLoading = createSelector(
  selectItemState,
  (item: ItemState) => item.isLoading
);

export const selectItems = createSelector(
  selectItemState,
  (item: ItemState) => item.items
);