import React from 'react';
import {SettingsPopover} from 'components';
import logo from 'icons/logo.png';

import './Header.css';

export default function Header() {
  return (
    <div className='header'>
      <img className='header-logo' src={logo} alt='no-logo' />
      <SettingsPopover />
    </div>
  );
}