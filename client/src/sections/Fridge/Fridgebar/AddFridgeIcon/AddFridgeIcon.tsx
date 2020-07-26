import React, {useState, useCallback} from 'react';
import {TextField} from '@shopify/polaris';
import {useDispatch} from 'react-redux';
import {thunkAddFridge} from 'store/fridge/actions';

import './AddFridgeIcon.css';

export default function AddFridgeIcon() {
  const dispatch = useDispatch();
  const [fridgeName, setFridgeName] = useState('');

  const handleCreateFridge = useCallback(() => {
    dispatch(thunkAddFridge(fridgeName));
  }, [fridgeName, dispatch]);

  const handleChange = useCallback((newValue) => {
    setFridgeName(newValue);
  }, []);

  return (
    <div className='fridge-input'>
      <div className='plus-icon' onClick={handleCreateFridge}>
        <img alt='plusLogo' />
      </div>
      <div className='input'>
        <TextField label='Add Fridge Name' value={fridgeName} onChange={handleChange} placeholder='fronge'/>
      </div>
    </div>
  );
}