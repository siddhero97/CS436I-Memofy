import React, {useState, useCallback} from 'react';
import {Modal, TextField} from '@shopify/polaris';

export default function AddFridgeIconModal() {
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = () => console.log('submitted');

  const toggleShowModal = useCallback(() => {
    setShowModal(!showModal);
  }, [showModal]);

  const [name, setName] = useState('');
  const handleNameChange = useCallback((name) => setName(name), []);

  const disabled = name === '';


  return (
    <Modal
      open={showModal}
      onClose={toggleShowModal}
      title="Create a new Fridge"
      primaryAction={{
        content: 'Create',
        disabled,
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
          <TextField label="Name of Fridge" value={name} placeholder={'Apples'} onChange={handleNameChange} autoFocus />
        </Modal.Section>

    </Modal>
  )
}