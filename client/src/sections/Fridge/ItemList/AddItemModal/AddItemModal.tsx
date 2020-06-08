import React, {useState, useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {Button, Modal, TextField, Card} from '@shopify/polaris';
import {addItem} from 'store/item/actions';

export default function AddItemModal() {
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);
  const [value, setValue] = useState('');

  const toggleShowModal = useCallback(() => {
    setShowModal(!showModal);
  }, [showModal]);

  const handleSubmit = useCallback(() => {
    const newItem = {
      name: value,
      // this will come from the database once setup
      category: 'Fruits',
      count: 1,
      expiry: new Date().toLocaleDateString(),
    };

    dispatch(addItem(newItem));
    toggleShowModal();
  }, [value, toggleShowModal]);

  const handleTextChange = useCallback((newValue) => {
    setValue(newValue);
  }, []);

  return (
    <Card.Section title="Can't find your item?">
      <Button fullWidth primary onClick={toggleShowModal}>Add Item</Button>
      <Modal
        open={showModal}
        onClose={toggleShowModal}
        title='Add new food item'
        primaryAction={{
          content: 'Add',
          disabled: value === '',
          onAction: handleSubmit,
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
  );
}

