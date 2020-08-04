import React from 'react';
import {SettingsPopover} from 'components';
import logo from 'icons/logo.png';

import './Header.css';

export default function Header() {
  return (
    <div className='overview-header'>
      <img className='overview-header-logo' src={logo} alt='no-logo' />
      <div className="title">Memofy</div>
      <SettingsPopover />
    </div>
  );
}