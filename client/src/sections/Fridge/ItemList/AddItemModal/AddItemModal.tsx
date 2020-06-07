import React, { useState, useCallback } from 'react';
import {Button, Modal, TextField, Card} from '@shopify/polaris';

interface Props {
  value: string;
  onValueChange: (value: string) => void;
  onAdd: (value: string) => void;
}

export default function AddItemModal({value, onValueChange, onAdd}: Props) {
  const [showModal, setShowModal] = useState(false);

  const toggleShowModal = useCallback(() => {
    setShowModal(!showModal);
  }, [showModal]);

  const handleSubmit = useCallback(() => {
    onAdd(value);
    toggleShowModal();
  }, [value, onAdd, toggleShowModal]);

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
          <TextField label="Food name" value={value} onChange={onValueChange} />
      </Modal.Section>
      </Modal>
    </Card.Section>
  );
}

