import React, { useState, useCallback } from 'react';
import {Card, Button, Modal, TextField} from '@shopify/polaris';
import {Item} from './components';

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

// NEED TO REFACTOR
export default function ItemList() {
  const [showModal, setShowModal] = useState(false);
  const [items, setItems] = useState(mockItems);
  const [value, setValue] = useState('');

  const toggleShowModal = useCallback(() => {
    setValue('');
    setShowModal(!showModal);
  }, [showModal]);

  const handleTextChange = useCallback((newValue) => {
    setValue(newValue);
  }, []);
    
  const handleAddFoodItem = useCallback(() => {
    const newItem = {
      name: value,
      expiry: '05/02/2020',
    }

    setItems([...items, newItem]);
    toggleShowModal();
  }, [items, value, toggleShowModal]);

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
              <Button fullWidth primary onClick={toggleShowModal}>Add Item</Button>
              <Modal
                open={showModal}
                onClose={toggleShowModal}
                title='Add new food item'
                primaryAction={{
                  content: 'Add',
                  onAction: handleAddFoodItem,
                }}
                secondaryActions={[
                  {
                    content: 'Cancel',
                    onAction: toggleShowModal,
                  }
                ]}
              >
                <Modal.Section>
                  <TextField label="Food name" value={value} onChange={handleTextChange} />
                </Modal.Section>
              </Modal>
            </Card.Section>
          </Card>
        </div>
      </div>
  );
}
