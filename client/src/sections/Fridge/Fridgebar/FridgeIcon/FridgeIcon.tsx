import React, {useState, useCallback, useEffect} from 'react';
// import {useSelector} from 'react-redux';
import {Card} from '@shopify/polaris';
// import {selectFridge} from 'store/fridge/selectors';
// import {Fridge as FridgeType} from 'store/fridge/types';
// import {Item, AddItemModal} from './components';
// import {thunkFetchItems} from 'store/fridge/actions';
// import {useDispatch} from 'react-redux';

import './FridgeIcon.css';

export default function FridgeIcon() {
  // const dispatch = useDispatch();

  return (
    <div className='icon-box'>
      <div className='icon'>
        <h2>A</h2>
      </div>
    </div>
  );
}
