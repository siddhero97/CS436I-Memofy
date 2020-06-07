import React from 'react';
import {ProfileMajorMonotone} from '@shopify/polaris-icons';
import {Icon, Heading} from '@shopify/polaris';
import {Navbar} from './components';

import logo from 'icons/logo.jpg';

import './Header.css';

export default function Header() {
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
        <Icon source={ProfileMajorMonotone} />
      </div>
    </div>
  );
}