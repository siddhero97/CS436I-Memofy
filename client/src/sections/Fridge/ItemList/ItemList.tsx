import React from 'react';
import {Card, Button} from '@shopify/polaris';
import {Item} from './components';

import './ItemList.css';

interface Item {
  name: string;
  expiry: string;
}

const items: Item[] = [
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

  const itemListMarkup = items.map(({name, expiry}, id) => {
    return (
      <div key={id}>
        <Item name={name} expiry={expiry}/>
      </div>
    );
  })

  return (
      <div className='item-list'>
        {itemListMarkup}
        <div className='item'>
          <Card sectioned>
            <Card.Section title="Can't find your item?">
              <Button fullWidth primary>Add Item</Button>
            </Card.Section>
          </Card>
        </div>
      </div>
  );
}
