import React, {useCallback, useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {thunkFetchFridges} from 'store/fridge/actions';
import './Fridgebar.css';
import FridgeIcon from './FridgeIcon';
import {selectFridges} from 'store/fridge/selectors';
import {selectUserId} from 'store/user/selectors'
import FridgeInput from './FridgeInput';

export default function FridgeBar() {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(thunkFetchFridges(activeId));
  // }, [dispatch]);

  const activeId: string | undefined = useSelector(selectUserId);

  console.log("activeId: " + activeId);

  const fridges = useSelector(selectFridges);

  const fridgeIconsMarkup = fridges.map((fridge) => {
    return (
      <div key={fridge._id}>
        <FridgeIcon></FridgeIcon>
      </div>
    );
  });

  return (
    <div className='bar'>
      {fridgeIconsMarkup}
      
      <FridgeInput></FridgeInput>
    </div>
  )
}