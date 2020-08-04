import React from 'react';
import {SettingsPopover} from 'components';
import logo from 'icons/logo.png';

import './Header.css';

export default function Header() {
  return (
    <div className='overview-header'>
      <div className='overview-header-left'>
        <img className='overview-header-logo' src={logo} alt='no-logo' />
        <div className="overview-header-title">Memofy</div>
      </div>
      <SettingsPopover />
    </div>
  );
}