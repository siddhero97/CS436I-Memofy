import React from 'react';
import {SettingsPopover} from 'components';
import {Filter} from './components';

import './Header.css';

export default function Header() {
  return (
    <div className='header'>
      <Filter />
      <SettingsPopover />
    </div>
  );
}

