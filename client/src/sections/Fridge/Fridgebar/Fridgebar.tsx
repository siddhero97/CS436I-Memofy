import React, {useCallback, useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {thunkAddFridge} from 'store/fridge/actions';

import Plus from '../../../icons/plus.png';
import './Fridgebar.css'
import FridgeIcon from './FridgeIcon'

export default function FridgeBar() {
  const dispatch = useDispatch();

  const handleCreateFridge = useCallback(() => {
    console.log('hi')

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
      <FridgeIcon></FridgeIcon>
      <FridgeIcon></FridgeIcon>
    </div>
  )
}