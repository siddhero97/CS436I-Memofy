import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {Header, Sidebar, ItemList, Fridgebar} from './components';
import {thunkInitialFridgeLoad} from 'store/fridge/actions';
import {selectIsLoggedIn} from 'store/app/selectors';
import {selectIsLoading} from 'store/fridge/selectors';

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
  }, [isLoggedIn, history, dispatch]);

  if (isLoading) {
    return null;
  }

  return (
    <div className='fridge'>
      <Header />
      <Sidebar />
      <ItemList />
      <Fridgebar />
    </div>
  );
}