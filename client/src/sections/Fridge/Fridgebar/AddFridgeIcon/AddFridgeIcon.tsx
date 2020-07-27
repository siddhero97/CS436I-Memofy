import React, { useState, useCallback } from 'react';
import { TextField, Modal } from '@shopify/polaris';
import { useDispatch } from 'react-redux';
import { thunkAddFridge } from 'store/fridge/actions';
import './AddFridgeIcon.css';
const Plus = require('../../../../icons/plus.png');

export default function AddFridgeIcon() {
  const dispatch = useDispatch();
  const [fridgeName, setFridgeName] = useState('');

  const handleCreateFridge = useCallback(() => {
    dispatch(thunkAddFridge(fridgeName));
  }, [fridgeName, dispatch]);

  const handleChange = useCallback((newValue) => {
    setFridgeName(newValue);
  }, []);

  const [showModal, setShowModal] = useState(false);

  const handleSubmit = () => console.log('submitted');

  const toggleShowModal = useCallback(() => {
    setShowModal(!showModal);
  }, [showModal]);

  const [name, setName] = useState('');
  const handleNameChange = useCallback((name) => setName(name), []);

  const disabled = name === '';

  return (
    <div className='fridge-input'>
      <div className='plus-icon' onClick={toggleShowModal} >
        <img src={Plus} alt='plusLogo' />
      </div>

      {/* <div className='input'>
        <TextField label='Add Fridge Name' value={fridgeName} onChange={handleChange} placeholder='fronge'/>
      </div> */}

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

    </div>
  );
}