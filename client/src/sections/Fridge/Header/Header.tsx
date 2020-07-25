import React from 'react';
import {ProfileMajorMonotone} from '@shopify/polaris-icons';
import {Button, Heading} from '@shopify/polaris';
import {Navbar} from './components';
import logo from 'icons/logo.png';
import './Header.css';
import {useHistory} from 'react-router-dom';
export default function Header() {
  const history = useHistory();

  const handleProfileClick = () => {
  // console.log(useSelectorS(userInfo));
    history.push('./profile');};
  return (
    <div className='header'>
      <div className='header-title'>
        <img src={logo} className='logo' alt={'Not found'} />
        <div className='heading'>
          <Heading>Memofy</Heading>
        </div>
        <Navbar />
      </div>
      <div className='profile-icon'>
        <Button icon={ProfileMajorMonotone} onClick={handleProfileClick
        }/>
      </div>
    </div>
  );}