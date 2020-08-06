import React from 'react';
import {Route, RouteProps, Switch} from 'react-router-dom';
import {Item, Login, Overview, Fridge, Profile} from 'sections';

interface StrictRouteProp {
  path: string;
  exact: RouteProps['exact'];
  component: RouteProps['component'];
}

const ROUTE_LIST: StrictRouteProp[] = [
  {
    path: '/login',
    exact: true,
    component: Login,
  },
  {
    path: '/home',
    exact: true,
    component: Overview,
  },
  {
    path: '/items',
    exact: true,
    component: Item,
  },
  {
    path: '/fridges',
    exact: true,
    component: Fridge,
  },
  {
    path: '/profile',
    exact: true,
    component: Profile,
  },
  {
    path: '/',
    exact: true,
    component: Overview,
  },
];

export default function Routes() {
  return (
    <div className='frame'>
      <Switch>
        {ROUTE_LIST.map((route) => (
          <Route key={route.path} {...route} />
        ))}
      </Switch>
    </div>
  );
}
