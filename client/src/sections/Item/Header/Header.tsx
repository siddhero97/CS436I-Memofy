import React from 'react';
import {SettingsPopover} from 'components';
import {Filter, Searchbar} from './components';

import './Header.css';

export default function Header() {
  return (
    <div className='header'>
      <div className='interactive'>
        <div className='search'>
          <Searchbar />
        </div>
        <div>
          <Filter />
        </div>
      </div>
      <SettingsPopover />
    </div>
  );
}

