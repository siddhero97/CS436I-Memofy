import React from 'react';
import {Route, RouteProps, Switch} from 'react-router-dom';
import {Fridge, Login} from 'sections';

interface StrictRouteProp {
    path: string;
    exact: RouteProps['exact'];
    component: RouteProps['component'];
}

const ROUTE_LIST: StrictRouteProp[] = [
    {
        path: '/home',
        exact: true,
        component: Fridge,
    },
    {
        path: '/login',
        exact: true,
        component: Login,
    },
    {
        path: '/',
        exact: true,
        component: Login,
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
