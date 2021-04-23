import React from 'react';

import loadable from '@loadable/component';

import Loading from '@/components/loading';

const Home = loadable(() => import('@/pages/home'), {
  fallback: <Loading />,
});

const Login = loadable(() => import('@/pages/login'), {
  fallback: <Loading />,
});

const NotFound = loadable(() => import('@/pages/error/404'), {
  fallback: <Loading />,
});

const RouterBlank = [
  {
    path: '/home',
    component: Home,
    exact: true,
    nomenu: true,
    child: [],
  },
  {
    path: '/login',
    component: Login,
    exact: true,
    nomenu: true,
    child: [],
  },
  {
    path: '/404',
    component: NotFound,
    exact: true,
    nomenu: true,
    child: [],
  },
];

export default RouterBlank;
