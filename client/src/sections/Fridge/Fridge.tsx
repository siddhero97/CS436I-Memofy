import React from 'react';
import {Header, Sidebar, ItemList} from './components';

import './Fridge.css';
import {useSelector} from 'react-redux';
import {selectIsLoggedIn} from 'store/app/selectors';
import {useHistory} from 'react-router-dom';

export default function Fridge() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const history = useHistory();

  if (!isLoggedIn) {
    history.push('./login');
  }

  return (
    <div className='fridge'>
      <Header />
      <Sidebar />
      <ItemList />
    </div>
  );
}