import React, { useState, useCallback } from 'react';
import {Button, Modal, TextField} from '@shopify/polaris';

import './AddCategoryModal.css';

interface Props {
  isEdit: boolean;
  value: string;
  onValueChange: (value: string) => void;
  onAdd: (value: string) => void;
}

export default function AddCategoryModal({isEdit, value, onValueChange, onAdd}: Props) {
  const [showModal, setShowModal] = useState(false);

  const toggleShowModal = useCallback(() => {
    setShowModal(!showModal);
  }, [showModal]);

  const handleSubmit = useCallback(() => {
    onAdd(value);
    toggleShowModal();
  }, [value, onAdd, toggleShowModal]);

  return (
    <div className='add-category-modal'>
      <Button primary disabled={isEdit} onClick={toggleShowModal}>+</Button>
      <Modal
        open={showModal}
        onClose={toggleShowModal}
        title='Add new category'
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
          <TextField label="Category name" value={value} onChange={onValueChange} />
        </Modal.Section>
      </Modal>
    </div>
  );
}

