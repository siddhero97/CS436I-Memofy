import React, {useState, useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {Button, ButtonGroup, TextContainer} from '@shopify/polaris';
import {selectIsLoggedIn} from 'store/app/selectors';
import {RegisterModal, LoginModal} from './components';
import logo from 'icons/logo.png';
import example from '../example.png';

import './Login.css';

export default function Login() {
  const dispatch = useDispatch();
  const history = useHistory();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  useEffect(() => {
    if (isLoggedIn) {
      history.push('./home');

      return;
    }
  }, [isLoggedIn, history, dispatch]);


  const toggleShowLoginModal = useCallback(() => setShowLoginModal(!showLoginModal), [showLoginModal]);
  const toggleShowRegisterModal = useCallback(() => setShowRegisterModal(!showRegisterModal), [showRegisterModal]);

  return (
    <div>
      <div className='top-bar'>
        <img className='login-logo' src={logo} alt={'Not found'} />
        <div className="title">Memofy</div>
      </div>
      <div className="intro-section">
        <div className="text-content">
          <TextContainer spacing="loose">
            <div className="intro">Keep an ease of mind</div>
            <h1 className="main-content">One Fridge, Two Fridge, Shared Fridge, Memofy Tracks it all.</h1>
            <div className="additional-content">Let Memofy keep track of your food, so you can focus on enjoying it. </div>
          </TextContainer>
          <ButtonGroup fullWidth>
            <Button primary onClick={toggleShowLoginModal} fullWidth={false}>Login</Button>
            <Button onClick={toggleShowRegisterModal}>Register</Button>
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