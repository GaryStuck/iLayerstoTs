
export default [
  {
    path: '/',
    redirect: () => '/layer'
  },
  {
    path: '/layer',
    name: 'layer',
    component: () => import('@/views/yunQfeng/index.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About.vue'),
    props: {
      about: 'www'
    }
  },
  {
    path: '/store',
    name: 'store',
    component: () => import('@/views/store.vue'),
  },
  {
    path: '/table',
    name: 'table',
    component: () => import('@/views/table.vue'),
  },
  {
    path: '/argu/:name',
    name: 'argu',
    component: () => import('@/views/argu.vue'),
    props: true
  },
  {
    path: '/parent',
    component: () => import('@/views/parent.vue'),
    children: [
      {
        path: 'child',
        component: () => import('@/views/child.vue'),
      },
    ],
  },
  {
    path: '/named_view',
    components: {
      default: () => import('@/views/child.vue'),
      email: () => import('@/views/email.vue'),
      tel: () => import('@/views/tel.vue'),
    },
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login.vue'),
  },
  {
    path: '/main',
    redirect: () => '/'
  },
   {
    path: '/pane',
    component: () => import('@/components/split-pane/index.vue')
  },
  {
    path: '*',
    component: () => import('@/views/error/404.vue')
  }
];
