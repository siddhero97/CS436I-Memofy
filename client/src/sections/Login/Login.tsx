import React, {useState, useCallback} from 'react';
import {Button, ButtonGroup} from '@shopify/polaris';
import logo from 'icons/logo.png';
import example from '../example.png';

import './Login.css';
import LoginModal from './LoginModal/LoginModal';
import RegisterModal from './RegisterModal/RegisterModal';

export default function Login() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const toggleShowLoginModal = useCallback(() => setShowLoginModal(!showLoginModal), [showLoginModal]);

  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const toggleShowRegisterModal = useCallback(() => setShowRegisterModal(!showRegisterModal), [showRegisterModal]);

  return (
    <div className='login'>
      <div className='top-bar'>
        <img src={logo} className="logo" alt={'Not found'} />
        <div className="title">Memofy</div>
      </div>

      <div className="main-page">
        <div className="text-content">
          <div className="intro">Keep an ease of mind</div>
          <h1 className="main-content">One Fridge, Two Fridge, Shared Fridge, Memofy Tracks it all.</h1>
          <div className="additional-content">Let Memofy keep track of your food, so you can focus on enjoying it. </div>
          <ButtonGroup fullWidth>
            <Button primary onClick={toggleShowLoginModal} fullWidth={false}>Login</Button>
            <Button outline onClick={toggleShowRegisterModal}>Register</Button>
          </ButtonGroup>
        </div>
        <div className="example-content">
          <img src={example} className="app-example" alt={'Not found'} />
        </div>
      </div>
      <LoginModal active={showLoginModal} handleChange={toggleShowLoginModal} />
      <RegisterModal active={showRegisterModal} handleChange={toggleShowRegisterModal} />
    </div>
  );
}