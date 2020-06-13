import React, {useState, useCallback} from 'react';
import {Button, Card, Heading, ButtonGroup} from '@shopify/polaris';
import logo from 'icons/logo.png';

import './Login.css';
import LoginModal from './LoginModal/LoginModal';

export default function Login() {
  const [showModal, setShowModal] = useState(false);
  const handleChange = useCallback(() => setShowModal(!showModal), [showModal]);

  return (
    <div className='login'>
      <Card>
        <div className='login-heading'>
          <Heading element='h1'>Memofy</Heading>
          <img src={logo} className="logo" alt={'Not found'} />
        </div>
        <Card sectioned>
          <ButtonGroup fullWidth>
            <Button primary onClick={handleChange}>Login</Button>
          </ButtonGroup>
        </Card>
      </Card>
      <LoginModal active={showModal} handleChange={handleChange} />
    </div>
  );
}