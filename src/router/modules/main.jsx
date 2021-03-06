import Loading from '@/components/loading';
import {
  CompassOutlined,
  DashboardOutlined,
  RocketOutlined,
  SettingOutlined,
  TeamOutlined,
  ToolOutlined,
} from '@ant-design/icons';
import loadable from '@loadable/component';
import React from 'react';

const PersonCenter = loadable(() => import('@/pages/person-center'), {
  fallback: <Loading />,
});

const DashBoard = loadable(() => import('@/pages/dashboard'), {
  fallback: <Loading />,
});

const Setting = loadable(() => import('@/pages/setting'), {
  fallback: <Loading />,
});

const UserList = loadable(() => import('@/pages/user-list'), {
  fallback: <Loading />,
});

const routerMain = [
  {
    path: '/admin/dashboard',
    name: '首页',
    component: DashBoard,
    icon: DashboardOutlined,
    exact: true,
    noMenu: false,
  },
  {
    path: '/admin/user',
    name: '用户管理',
    icon: ToolOutlined,
    noMenu: false,
    child: [
      {
        path: '/admin/user/list',
        name: '用户列表',
        component: UserList,
        icon: TeamOutlined,
        exact: true,
        noMenu: false,
      },
    ],
  },
  {
    path: '/admin/mgt',
    name: '后台管理',
    icon: RocketOutlined,
    noMenu: false,
    child: [
      {
        path: '/admin/mgt/setting',
        name: '设置',
        component: Setting,
        icon: SettingOutlined,
        exact: true,
        noMenu: false,
      },
      {
        path: '/admin/mgt/my',
        name: '个人中心',
        component: PersonCenter,
        icon: CompassOutlined,
        exact: true,
        noMenu: false,
      },
    ],
  },
];

export default routerMain;
