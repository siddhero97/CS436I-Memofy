import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Routes} from './components';

export default function App() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}