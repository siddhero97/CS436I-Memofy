import {Item, ItemActionTypes, ADD_ITEM, DELETE_ITEM, GET_ITEMS} from './types';
import {ItemState} from 'store/types';
import apple from 'icons/apple.svg';
import orange from 'icons/orange.svg';
import avocado from 'icons/avocado.svg';
import milk from 'icons/milk.svg';
import steak from 'icons/steak.svg';
import grapes from 'icons/grapes.svg';
import lettuce from 'icons/lettuce.svg';


const initialItems: Item[] = [
  {
    name: 'Apples',
    category: 'Fruits',
    count: 5,
    icon: apple,
    expiry: new Date().toLocaleDateString(),
  },
  {
    name: 'Oranges',
    category: 'Fruits',
    count: 2,
    icon: orange,
    expiry: new Date().toLocaleDateString(),
  },
  {
    name: 'Milk',
    category: 'Dairy',
    count: 1,
    icon: milk,
    expiry: new Date().toLocaleDateString(),
  },
  {
    name: 'Steak',
    category: 'Meat',
    count: 1,
    icon: steak,
    expiry: new Date().toLocaleDateString(),
  },
  {
    name: 'Avocados',
    category: 'Fruits',
    count: 6,
    icon: avocado,
    expiry: new Date().toLocaleDateString(),
  },
  {
    name: 'Grapes',
    category: 'Fruits',
    count: 2,
    icon: grapes,
    expiry: new Date().toLocaleDateString(),
  },
  {
    name: 'Lettuce',
    category: 'Vegetable',
    count: 1,
    icon: lettuce,
    expiry: new Date().toLocaleDateString(),
  }
];

const initialState: ItemState = {
  items: initialItems
};

export function itemReducer(
  state = {items:[]},
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
    case GET_ITEMS:
      return {
        items: action.payload
      };
    default:
      return state;
  }
}