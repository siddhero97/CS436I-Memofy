import React, {useState, useCallback} from 'react';
import {Button, Card, Heading, ButtonGroup} from '@shopify/polaris';
import logo from 'icons/logo.png';
import example from '../example.png';

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

      <div className="main-page">
        <div className="text-content">
          <div className="intro">Keep an ease of mind</div>
          <h1 className="main-content">One Fridge, Two Fridge, Shared Fridge, Memofy Tracks it all. </h1>  
          <div className="additional-content">Let Memofy keep track of your food, so you can focus on enjoying it. </div>
          <ButtonGroup fullWidth>
              <Button primary onClick={toggleShowModal} fullWidth={false}>Login</Button>
              <Button outline onClick={toggleShowModal}>Register</Button>
          </ButtonGroup>
        </div>
        <div className="example-content">
          <img src={example} className="app-example" alt={'Not found'} />
        </div>
      </div>
      <LoginModal active={showModal} handleChange={toggleShowModal} />
    </div>
  );
}