import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {thunkInitialFridgeLoad} from 'store/fridge/actions';
import {setActiveFridge} from 'store/app/actions';
import {selectIsLoggedIn} from 'store/app/selectors';
import {selectIsLoading} from 'store/fridge/selectors';
import {Header, Fridgebar, FridgeDetails} from './components';

import './Fridge.css';

export default function Fridge() {
  const dispatch = useDispatch();
  const history = useHistory();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    if (!isLoggedIn) {
      history.push('./login');

      return;
    }

    dispatch(thunkInitialFridgeLoad());

    return () => {
      dispatch(setActiveFridge(undefined));
    };
  }, [isLoggedIn, history, dispatch]);

  if (isLoading) {
    return null;
  }

  return (
    <div className='fridge'>
      <Header />
      <Fridgebar />
      <FridgeDetails />
    </div>
  );
}