import React from 'react';
import {useSelector} from 'react-redux';
import {Card} from '@shopify/polaris';
import {selectItems} from 'store/item/selectors';
import {Item, AddItemModal} from './components';

import './ItemList.css';

export default function ItemList() {
  const items = useSelector(selectItems);

  const itemListMarkup = items.map(({name, expiry}, id) => {
    return (
      <div key={id}>
        <Item name={name} expiry={expiry}/>
      </div>
    );
  });

  return (
    <div className='item-list'>
      <div className='item'>
        <Card sectioned>
          <AddItemModal />
        </Card>
      </div>
      {itemListMarkup}
    </div>
  );
}
