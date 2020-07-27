import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AddFridgeIcon, FridgeIcon} from './components';
import {setActiveFridge} from 'store/app/actions';
import {selectFridges} from 'store/fridge/selectors';
import {selectActiveFridge} from 'store/app/selectors';
import {Fridge} from 'store/fridge/types';
import AddFridgeIconModal from './AddFridgeIconModal'
import './Fridgebar.css';

export default function FridgeBar() {
  const dispatch = useDispatch();
  const activeFridge = useSelector(selectActiveFridge);
  const fridges = useSelector(selectFridges);

  const handleActiveFridgeUpdate = (fridge: Fridge) => {
    if (activeFridge === fridge) {
      return;
    }

    dispatch(setActiveFridge(fridge));
  };

  const fridgeIconsMarkup = fridges
    ? fridges.map((fridge) => {
      const {_id} = fridge;

      return (
        <div key={_id} onClick={() => handleActiveFridgeUpdate(fridge)}>
          <FridgeIcon />
        </div>
      );
    })
    : null;

  return (
    <div className='bar'>
      {fridgeIconsMarkup}
      <AddFridgeIcon />
      <AddFridgeIconModal />
    </div>
  );
}