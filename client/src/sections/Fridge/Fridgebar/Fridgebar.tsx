import React, {useCallback, useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {thunkAddFridge, thunkFetchFridges} from 'store/fridge/actions';
import Plus from '../../../icons/plus.png';
import './Fridgebar.css'
import FridgeIcon from './FridgeIcon'
import {selectFridges} from 'store/fridge/selectors';

export default function FridgeBar() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(thunkFetchFridges());
  }, [dispatch]);

  const fridges = useSelector(selectFridges);

  const displayFridgeIcons = fridges.map((fridge) => {
    return (
      <div key={fridge._id}>  
        <FridgeIcon></FridgeIcon>
      </div>
    );
  });

  const handleCreateFridge = useCallback(() => {
    const newFridge = {
      name: 'fridgeA',
      userIds: [],
      categories: [],
      filters: [],
    };

    dispatch(thunkAddFridge(newFridge));
  }, [dispatch]);

  return (
    <div className='bar'>
      <div className='plus-icon' onClick={handleCreateFridge}>
        <img src={Plus} />
      </div>
      {displayFridgeIcons}
    </div>
  )
}