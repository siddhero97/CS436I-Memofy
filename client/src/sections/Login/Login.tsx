import React, {useState, useCallback} from 'react';
import {useHistory} from 'react-router-dom';
import {Button, Card, Heading, ButtonGroup} from '@shopify/polaris';
import logo from 'icons/logo.png';

import './Login.css';
import LoginModal from './LoginModal';

export default function Login() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [active, setActive] = useState(false);

  const handleChange = useCallback(() => setActive(!active), [active]);

  const handleLogin = () => {
    history.push('/home');
  };

  const handleEmailLogin = useCallback((value) => setEmail(value), []);

  const handlePasswordLogin = useCallback((value) => setPassword(value), []);

  return (
    <div className='login'>
      <Card>
        <div className='login-heading'>
          <Heading element='h1'>Memofy</Heading>
          <img src={logo} className="logo" alt={'Not found'} />
        </div>
        <Card sectioned title='Please choose a login option:'>
          <ButtonGroup fullWidth>
            <Button primary onClick={handleChange}>Login</Button>
          </ButtonGroup>
        </Card>
      </Card>
      <LoginModal email={email} password={password} active={active} handleChange={handleChange} 
        handleLogin={handleLogin} handleEmailLogin={handleEmailLogin} handlePasswordLogin={handlePasswordLogin}></LoginModal>
    </div>
  );
}