import React, {useState, useCallback, useEffect} from 'react';
import {TextField} from '@shopify/polaris';
import Plus from '../../../../icons/plus.png';
import {useDispatch, useSelector} from 'react-redux';
import {thunkAddFridge, thunkFetchFridges} from 'store/fridge/actions';
import {selectUserId} from 'store/user/selectors'

import './FridgeInput.css';

export default function FridgeInput() {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(thunkFetchFridges());
  // }, [dispatch]);

  const activeId: string | undefined = useSelector(selectUserId);
  const [fridgeName, setFridgeName] = useState('');

  const handleCreateFridge = useCallback(() => {
    console.log(fridgeName)
    const newFridge = {
      name: fridgeName,
      userIds: [activeId],
      categories: [],
      filters: [],
    };
    console.log(newFridge);

    dispatch(thunkAddFridge(newFridge));
  }, [dispatch, fridgeName]);

  const handleChange = useCallback((newValue) => {
    setFridgeName(newValue);
    console.log(fridgeName);
  }, [fridgeName]);

  return (
    <div className='fridge-input'>

      <div className='plus-icon' onClick={handleCreateFridge}>
        <img src={Plus} />
      </div>

      <div className='input'>
        <TextField label='Add Fridge Name' value={fridgeName} onChange={handleChange} placeholder='fronge'/>
      </div>

    </div>    
  );
}