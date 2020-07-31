import React, {useState, useCallback} from 'react';
import {TextField, Banner, Modal} from '@shopify/polaris';
import {useDispatch} from 'react-redux';
import {thunkAddFridge} from 'store/fridge/actions';

interface Props {
  active: boolean;
  handleClose: () => void;
}

export default function AddFridgeModal({active, handleClose}: Props) {
  const dispatch = useDispatch();
  const [fridgeName, setFridgeName] = useState('');
  const [showWarning, setShowWarning] = useState(false);

  const handleCreateFridge = useCallback(() => {
    if (fridgeName === "") {
      setShowWarning(true);
    } else {
      dispatch(thunkAddFridge(fridgeName));
    }
  }, [fridgeName, dispatch]);

  const handleFridgeNameChange = useCallback((newValue) => {
    setShowWarning(newValue === '');
    setFridgeName(newValue);
  }, []);

  const disabled = fridgeName === '';

  const fridgeNameWarningMarkup = showWarning ? (
    <Banner status="warning">
      <p>
        Please enter a name.
      </p>
    </Banner>
  ) : null;

  return (
    <div className='add-fridge-modal'>
      <Modal
        open={active}
        onClose={handleClose}
        title="Add a new fridge"
        primaryAction={{
          content: 'Add',
          onAction: handleCreateFridge,
          disabled,
        }}
        secondaryActions={[
          {
            content: 'Cancel',
            onAction: handleClose,
          },
        ]}
      >
        <Modal.Section>
          <TextField
            value={fridgeName}
            onChange={handleFridgeNameChange}
            label="Name"
            type="text"
          />
          {fridgeNameWarningMarkup}
        </Modal.Section>
      </Modal>
    </div>
  );
}