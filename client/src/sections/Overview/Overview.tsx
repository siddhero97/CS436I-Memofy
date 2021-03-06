import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {selectIsLoggedIn} from 'store/app/selectors';
import {Feed, Header, PageSelection} from './components';

import './Overview.css';

export default function Overview() {
  const dispatch = useDispatch();
  const history = useHistory();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    if (!isLoggedIn) {
      history.push('./login');

      return;
    }
  }, [isLoggedIn, history, dispatch]);

  return (
    <div className='overview'>
      <Feed />
      <Header />
      <PageSelection />
    </div>
  );
}