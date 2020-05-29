import React from 'react';
import {Header, Sidebar, ItemList} from './components';

import './Fridge.css';

export default function Fridge() {
  return (
      <div className='fridge'>
            <Header />
            <Sidebar />
            <ItemList />
      </div>
  );
}