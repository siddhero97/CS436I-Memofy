import React, { useState, useCallback } from 'react';
import {Card} from '@shopify/polaris';
import {Item, AddItemModal} from './components';

import './ItemList.css';

interface Item {
  name: string;
  expiry: string;
}

const mockItems: Item[] = [
  {
    name: 'Apples',
    expiry: '05/02/2020',
  },
  {
    name: 'Oranges',
    expiry: '05/02/2020',
  },
  {
    name: 'Milk',
    expiry: '05/02/2020',
  },
  {
    name: 'Steak',
    expiry: '05/02/2020',
  },
  {
    name: 'Avocados',
    expiry: '05/02/2020',
  },
  {
    name: 'Grapes',
    expiry: '05/02/2020',
  },
  {
    name: 'Lettuce',
    expiry: '05/02/2020',
  }
]

export default function ItemList() {
  const [items, setItems] = useState(mockItems);
  const [value, setValue] = useState('');

  const handleTextChange = useCallback((newValue) => {
    setValue(newValue);
  }, []);

  const handleAddItem = useCallback(() => {
    const newItem = {
      name: value,
      expiry: '05/02/2020',
    }

    setItems([...items, newItem]);
    setValue('');
  }, [items, value]);

  const itemListMarkup = items.map(({name, expiry}, id) => {
    return (
      <div key={id}>
        <Item name={name} expiry={expiry}/>
      </div>
    );
  })

  return (
    <div className='item-list'>
      <div className='item'>
        <Card sectioned>
          <AddItemModal
            value={value}
            onValueChange={handleTextChange}
            onAdd={handleAddItem}
          />
        </Card>
      </div>
      {itemListMarkup}
    </div>
  );
}
