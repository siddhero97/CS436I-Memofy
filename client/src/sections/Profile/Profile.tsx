import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {selectIsLoggedIn} from 'store/app/selectors';
import {Header} from 'components';
import {PersonalInfo, AccountDetails} from './components';

import './Profile.css';

export default function Profile() {
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
    <div className='profile'>
      <Header />
      <PersonalInfo />
      <AccountDetails />
    </div>
  );
}