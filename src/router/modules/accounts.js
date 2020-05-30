import Layout from '@/views/layouts/index.vue';

const accountRouters = [
  {
    path: '/',
    component: Layout,
    redirect: '/accounts',
    children: [
      {
        path: 'accounts',
        component: () => import(/* webpackChunkName: "accounts" */'@/views/accounts/index.vue'),
        name: 'accounts',
        meta: {
          title: 'Accounts',
          icon: 'key',
          affix: true,
          auth: true,
        },
      },
    ],
  },
];

export default accountRouters;
