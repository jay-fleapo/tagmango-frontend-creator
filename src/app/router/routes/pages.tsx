import { lazy } from 'react';

const PagesRoutes = [
  {
    path: '/pages/habit',
    component: lazy(() => import('../../../../view/habit/index')),
    layout: 'VerticalLayout',
  },
];
