import React from 'react';
import {useHistory} from 'react-router-dom';
import {Button, ButtonGroup} from '@shopify/polaris';

import './Navbar.css';
import {useDispatch} from 'react-redux';
import {logout} from '../../../../store/user/actions';

export default function Navbar() {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleHomeClick = () => {
    history.push('./home');
  };

  const handleLogoutClick = () => {
    dispatch(logout());
    history.push('./login');
  };

  return (
    <div className='navbar'>
      <ButtonGroup fullWidth>
        <div className='button'>
          <Button primary onClick={handleHomeClick}>Home</Button>
        </div>
        <div className='button'>
          <Button disabled>WIP</Button>
        </div>
        <div className='button'>
          <Button disabled>WIP</Button>
        </div>
        <div className='button'>
          <Button disabled>WIP</Button>
        </div>
        <div className='button'>
          <Button disabled>WIP</Button>
        </div>
        <div className='button'>
          <Button disabled>WIP</Button>
        </div>
        <div className='button'>
          <Button destructive onClick={handleLogoutClick}>Logout</Button>
        </div>
      </ButtonGroup>
    </div>
  );
}
