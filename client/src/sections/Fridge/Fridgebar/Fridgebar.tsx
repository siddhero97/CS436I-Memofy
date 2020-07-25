import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import './Fridgebar.css';
import FridgeIcon from './FridgeIcon';
import {selectFridges} from 'store/fridge/selectors';
import FridgeInput from './FridgeInput';
import {setActiveFridge} from 'store/app/actions';
import {Fridge} from 'store/fridge/types';
import {thunkFetchItems} from 'store/item/actions';

export default function FridgeBar() {
  const dispatch = useDispatch();
  const fridges = useSelector(selectFridges);

  const handleActiveFridgeUpdate = (fridge: Fridge) => {
    dispatch(setActiveFridge(fridge));
    dispatch(thunkFetchItems(fridge));
  };

  const fridgeIconsMarkup = fridges.map((fridge) => {
    return (
      <div key={fridge._id} onClick={() => handleActiveFridgeUpdate(fridge)}>
        <FridgeIcon />
      </div>
    );
  });

  return (
    <div className='bar'>
      {fridgeIconsMarkup}

      <FridgeInput></FridgeInput>
    </div>
  );
}