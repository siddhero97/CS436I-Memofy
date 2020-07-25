import React, {useState, useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Button, Modal, TextField, Card} from '@shopify/polaris';
import {thunkAddItem} from 'store/item/actions';
import { selectActiveFridge } from 'store/app/selectors';

export default function AddItemModal() {
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);
  const [value, setValue] = useState('');

  const toggleShowModal = useCallback(() => {
    setShowModal(!showModal);
  }, [showModal]);

  const activeFridge = useSelector(selectActiveFridge);
  console.log('active fridge is' +  activeFridge);

  const handleSubmit = useCallback(() => {
    const newItem = {
      fridgeId: activeFridge,
      count: 1,
      name: value,
      // this will come from the database once setup
      category: 'Fruits',
      icon: 'url',
      expiryDate: new Date(),
    };

    dispatch(thunkAddItem(newItem));
    toggleShowModal();
  }, [dispatch, value, toggleShowModal]);

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

