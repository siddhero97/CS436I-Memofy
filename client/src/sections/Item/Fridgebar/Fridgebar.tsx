import React, {useState, useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AddFridgeModal} from './components';
import {setActiveFridge} from 'store/app/actions';
import {selectFridges} from 'store/fridge/selectors';
import {selectActiveFridge} from 'store/app/selectors';
import {Fridge} from 'store/fridge/types';
import logo from 'icons/logo.png';

import './Fridgebar.css';
import {Card, Button} from '@shopify/polaris';

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
          <Button pressed={_id === activeFridge?._id} onClick={() => handleActiveFridgeUpdate(fridge)}>
            {name}
          </Button>
        </Card.Section>
      );
    })
    : null;

  return (
    <div className='fridgebar'>
      <img className='fridgebar-logo' src={logo} alt='no-logo' />
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