import React from 'react';
import {ProfileMajorMonotone} from '@shopify/polaris-icons';
import {Button, Heading} from '@shopify/polaris';
import {Navbar} from './components';

import logo from 'icons/logo.png';

import './Header.css';
import Profile from 'sections/Profile';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { userInfo } from 'os';

export default function Header() {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleProfileClick = () => {
  // console.log(useSelectorS(userInfo));
  history.push('./profile');
  };
  return (
    <div className='header'>
      <div className='header-title'>
        <img src={logo} className='logo' alt={'Not found'} />
        <div className='heading'>
          <Heading>Memofy</Heading>
        </div>
        <Navbar />
      </div>
      <div className='profile-icon'>
        <Button icon={ProfileMajorMonotone} onClick={handleProfileClick
        }/>
      </div>
    </div>
  );

  
}