import React, {useState, useCallback} from 'react';
import {useSelector} from 'react-redux';
import {Card} from '@shopify/polaris';
import {selectItems} from 'store/item/selectors';
import {Item, AddItemModal} from './components';

import './ItemList.css';

export default function ItemList() {
  const [items, setItems] = useState(useSelector(selectItems));
  const [value, setValue] = useState('');

  const handleTextChange = useCallback((newValue) => {
    setValue(newValue);
  }, []);

  const handleAddItem = useCallback(() => {
    const newItem = {
      // this will come from the database once setup
      id: items.length,
      name: value,
      // this will come from the database once setup
      category: 'Fruits',
      count: 1,
      expiry: new Date().toLocaleDateString(),
    };

    setItems([...items, newItem]);
    setValue('');
  }, [items, value]);

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
