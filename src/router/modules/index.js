import authRouters from '@/router/modules/auth';
import accountRouters from '@/router/modules/accounts';

export default [
  ...authRouters,
  ...accountRouters,
];
