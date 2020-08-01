import React, {useState, useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AddFridgeModal} from './components';
import {setActiveFridge} from 'store/app/actions';
import {selectFridges} from 'store/fridge/selectors';
import {selectActiveFridge} from 'store/app/selectors';
import {Fridge} from 'store/fridge/types';

import './Fridgebar.css';
import {Card, Button, Tooltip} from '@shopify/polaris';

export default function FridgeBar() {
  const dispatch = useDispatch();
  const activeFridge = useSelector(selectActiveFridge);
  const fridges = useSelector(selectFridges);
  const [showAddFridgeModal, setShowAddFridgeModal] = useState(false);

  const toggleShowAddFridgeModal = useCallback(() => setShowAddFridgeModal(!showAddFridgeModal), [showAddFridgeModal]);

  const handleActiveFridgeUpdate = (fridge: Fridge) => {
    if (activeFridge === fridge) {
      return;
    }

    dispatch(setActiveFridge(fridge));
  };

  const fridgeSelectionMarkup = fridges
    ? fridges.map((fridge) => {
      const {_id, name} = fridge;

      return (
        <Card.Section key={_id}>
          <Tooltip content={name}>
            <Button pressed={_id === activeFridge?._id} onClick={() => handleActiveFridgeUpdate(fridge)}>
              {name.charAt(0).toUpperCase()}
            </Button>
          </Tooltip>
        </Card.Section>
      );
    })
    : null;

  return (
    <div className='fridgebar'>
      <Card title='Fridges'>
        {fridgeSelectionMarkup}
        <Card.Section>
          <Button onClick={toggleShowAddFridgeModal}>
            +
          </Button>
        </Card.Section>
      </Card>
      <AddFridgeModal active={showAddFridgeModal} handleClose={toggleShowAddFridgeModal} />
    </div>
  );
}