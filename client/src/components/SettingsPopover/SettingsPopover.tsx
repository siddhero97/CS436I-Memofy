import React, {useState, useCallback} from 'react';
import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {thunkLogout} from 'store/user/actions';
import {Popover, ActionList, Button} from '@shopify/polaris';

import './SettingsPopover.css';

interface NavItems {
  content: string;
  path: string;
}

const navItems: NavItems[] = [
  {
    content: 'Home',
    path: '/home',
  },
  {
    content: 'Food Overview',
    path: '/items',
  },
  {
    content: 'Fridge Management',
    path: '/fridges',
  },
  {
    content: 'Profile',
    path: '/profile',
  }
];

export default function
SettingsPopover() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [popoverActive, setPopoverActive] = useState(false);

  const togglePopoverActive = useCallback(() =>
    setPopoverActive((popoverActive) => !popoverActive)
  , []);

  const handleLogout = useCallback(() => {
    dispatch(thunkLogout());
  }, [dispatch]);

  const activator = (
    <Button onClick={togglePopoverActive} disclosure>
      Options
    </Button>
  );

  const navItemsMarkup = navItems.map(({content, path}) => {
    return {
      content,
      onAction: () => history.push(path),
    };
  });

  return (
    <div className='settings-popover'>
      <Popover
        active={popoverActive}
        activator={activator}
        onClose={togglePopoverActive}
      >
        <ActionList
          sections={[
            {
              items: navItemsMarkup
            },{
              items: [{
                content: 'Logout',
                onAction: handleLogout,
              }]
            },
          ]}
        />
      </Popover>
    </div>
  );
}