import {Item, ItemActionTypes, ADD_ITEM, DELETE_ITEM} from './types';
import {ItemState} from 'store/types';

const initialItems: Item[] = [
  {
    id: 1,
    name: 'Apples',
    category: 'Fruits',
    count: 5,
    expiry: new Date().toLocaleDateString(),
  },
  {
    id: 2,
    name: 'Oranges',
    category: 'Fruits',
    count: 2,
    expiry: new Date().toLocaleDateString(),
  },
  {
    id: 3,
    name: 'Milk',
    category: 'Dairy',
    count: 1,
    expiry: new Date().toLocaleDateString(),
  },
  {
    id: 4,
    name: 'Steak',
    category: 'Meat',
    count: 1,
    expiry: new Date().toLocaleDateString(),
  },
  {
    id: 5,
    name: 'Avocados',
    category: 'Fruits',
    count: 6,
    expiry: new Date().toLocaleDateString(),
  },
  {
    id: 6,
    name: 'Grapes',
    category: 'Fruits',
    count: 2,
    expiry: new Date().toLocaleDateString(),
  },
  {
    id: 7,
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
        items: [...state.items].filter(({id}) => id !== action.payload),
      };
    default:
      return state;
  }
}