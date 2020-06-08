import {Item, ItemActionTypes, ADD_ITEM, DELETE_ITEM} from './types';
import {ItemState} from 'store/types';

const initialItems: Item[] = [
  {
    name: 'Apples',
    category: 'Fruits',
    count: 5,
    expiry: new Date().toLocaleDateString(),
  },
  {
    name: 'Oranges',
    category: 'Fruits',
    count: 2,
    expiry: new Date().toLocaleDateString(),
  },
  {
    name: 'Milk',
    category: 'Dairy',
    count: 1,
    expiry: new Date().toLocaleDateString(),
  },
  {
    name: 'Steak',
    category: 'Meat',
    count: 1,
    expiry: new Date().toLocaleDateString(),
  },
  {
    name: 'Avocados',
    category: 'Fruits',
    count: 6,
    expiry: new Date().toLocaleDateString(),
  },
  {
    name: 'Grapes',
    category: 'Fruits',
    count: 2,
    expiry: new Date().toLocaleDateString(),
  },
  {
    name: 'Lettuce',
    category: 'Vegetable',
    count: 1,
    expiry: new Date().toLocaleDateString(),
  }
];

const initialState: ItemState = {
  items: initialItems
};

export function itemReducer(
  state = initialState,
  action: ItemActionTypes,
): ItemState {
  switch (action.type) {
    case ADD_ITEM:
      return {
        items: [...state.items, action.payload],
      };
    case DELETE_ITEM:
      return {
        items: [...state.items].filter(({name}) => name !== action.payload),
      };
    default:
      return state;
  }
}