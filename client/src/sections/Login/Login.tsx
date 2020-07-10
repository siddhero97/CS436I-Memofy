import React, {useState, useCallback} from 'react';
import {Button, Card, Heading, ButtonGroup} from '@shopify/polaris';
import logo from 'icons/logo.png';

import './Login.css';
import LoginModal from './LoginModal/LoginModal';
import RegisterModal from "./RegisterModal";

export default function Login() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const toggleShowLoginModal = useCallback(() => setShowLoginModal(!showLoginModal), [showLoginModal]);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const toggleShowRegisterModal = useCallback(() => setShowRegisterModal(!showRegisterModal), [showRegisterModal]);

  return (
    <div className='login'>
      <Card>
        <div className='login-heading'>
          <Heading element='h1'>Memofy</Heading>
          <img src={logo} className="logo" alt={'Not found'} />
        </div>
        <Card sectioned>
          <div className="login-button-group">
            <ButtonGroup fullWidth>
              <Button primary onClick={toggleShowLoginModal}>Login</Button>
              <Button primary onClick={toggleShowRegisterModal}>Register</Button>
            </ButtonGroup>
          </div>
        </Card>
      </Card>
      <LoginModal active={showLoginModal} handleChange={toggleShowLoginModal} />
      <RegisterModal active={showRegisterModal} handleChange={toggleShowRegisterModal} />
    </div>
  );}