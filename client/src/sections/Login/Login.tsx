import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Card, Heading, ButtonGroup } from '@shopify/polaris';
import logo from 'icons/logo.jpg';

import './Login.css';

export default function Login() {
  const history = useHistory();

  const handleLogin = () => {
    history.push('/home');
  }

  return (
    <div className='login'>
      <Heading element='h1'>Memofy</Heading>
      <img src={logo} className="logo"/>
      <Card sectioned title='Please choose a login option:'>
        <ButtonGroup fullWidth>
          <Button primary onClick={handleLogin}>Login with Google</Button>
          <Button primary onClick={handleLogin}>Login with Facebook</Button>
        </ButtonGroup>
      </Card>
    </div>
  );
}