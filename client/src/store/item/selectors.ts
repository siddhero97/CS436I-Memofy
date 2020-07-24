import {RootState, ItemState} from '../types';
import {createSelector} from 'reselect';

const selectItemState = (state: RootState) => state.item;

export const selectItems = createSelector(
  selectItemState,
  (item: ItemState) => item.items
);