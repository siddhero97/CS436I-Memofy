import React, {useState, useCallback} from 'react';
import {TextField} from '@shopify/polaris';
import Plus from '../../../../icons/plus.png';
import {useDispatch, useSelector} from 'react-redux';
import {thunkAddFridge} from 'store/fridge/actions';
import {selectUserId} from 'store/user/selectors';

import './FridgeInput.css';

export default function FridgeInput() {
  const dispatch = useDispatch();

  const activeId: string | undefined = useSelector(selectUserId);
  const [fridgeName, setFridgeName] = useState('');

  const handleCreateFridge = useCallback(() => {
    const newFridge = {
      name: fridgeName,
      userIds: [activeId],
      categories: [],
      filters: [],
    };

    dispatch(thunkAddFridge(newFridge));
  }, [dispatch, fridgeName]);

  const handleChange = useCallback((newValue) => {
    setFridgeName(newValue);
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