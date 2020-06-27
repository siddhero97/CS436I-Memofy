import React, {useState, useCallback} from 'react';
import {Button, Card, Heading, ButtonGroup} from '@shopify/polaris';
import logo from 'icons/logo.png';

import './Login.css';
import LoginModal from './LoginModal/LoginModal';

export default function Login() {
  const [showModal, setShowModal] = useState(false);
  const toggleShowModal = useCallback(() => setShowModal(!showModal), [showModal]);

  return (
    <div className='login'>
      <div className='top-bar'>
        <img src={logo} className="logo" alt={'Not found'} />
        <div className="title">Memofy</div>
      </div>

      {/* <Card>
        <div className='login-heading'>
          <Heading element='h1'>Memofy</Heading>
          <img src={logo} className="logo" alt={'Not found'} />
        </div>
        <Card sectioned>
          <div className="login-button-group">
            <ButtonGroup fullWidth>
              <Button primary onClick={toggleShowModal}>Login</Button>
            </ButtonGroup>
          </div>
        </Card>
      </Card>
      <LoginModal active={showModal} handleChange={toggleShowModal} /> */}
    </div>
  );
}