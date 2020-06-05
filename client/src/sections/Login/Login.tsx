import React from 'react';
import logo from './logo.jpg';

import './Login.css';

export default function Login() {
  return (
      <div className='login'>
            <h1>memofy</h1>
            <img src={logo} className="app-logo" />
            <button className="btn">login with Google</button>
            <button className="btn">login with Facebook</button>
      </div>
  );
}